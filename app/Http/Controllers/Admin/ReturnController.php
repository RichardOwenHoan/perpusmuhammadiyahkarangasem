<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BookLoan;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReturnController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $loans = BookLoan::with(['user', 'book'])
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->where('status_verifikasi', 'verified')
            ->orderBy('return_date', 'asc')
            ->paginate(10);

        return view('Dashboard.Return.index', compact('loans'));
    }

    /**
     * Process book return
     */
    public function processReturn(BookLoan $loan)
    {
        $today = Carbon::today();
        $denda = 0;

        // Jika tanggal pengembalian melebihi tanggal jatuh tempo, hitung denda
        if ($today->gt($loan->return_date)) {
            $daysLate = $today->diffInDays($loan->return_date);
            $denda = $daysLate * 1000; // Denda Rp 1.000 per hari

            $loan->update([
                'status_peminjaman' => 'dikembalikan',
                'actual_return_date' => $today,
                'denda' => $denda,
                'status_denda' => 'belum_dibayar'
            ]);
        } else {
            $loan->update([
                'status_peminjaman' => 'dikembalikan',
                'actual_return_date' => $today,
                'status_denda' => 'tidak_ada'
            ]);
        }


        // Kembalikan stok buku
        $loan->book->increment('stok');

        if ($denda > 0) {
            return redirect()->route('dashboard.fines.index')
                ->with('success', 'Buku berhasil dikembalikan. Siswa dikenakan denda sebesar Rp ' . number_format($denda, 0, ',', '.'));
        }

        return redirect()->route('dashboard.returns.index')
            ->with('success', 'Buku berhasil dikembalikan tanpa denda');
    }

    /**
     * Process book loan extension
     */
    public function extend(Request $request, BookLoan $loan)
    {
        $request->validate([
            'extension_days' => 'required|integer|min:1|max:30'
        ], [
            'extension_days.required' => 'Hari perpanjangan wajib diisi.',
            'extension_days.integer' => 'Hari perpanjangan harus berupa angka.',
            'extension_days.min' => 'Hari perpanjangan minimal 1 hari.',
            'extension_days.max' => 'Hari perpanjangan maksimal 30 hari.',
        ]);

        $newReturnDate = Carbon::parse($loan->return_date)->addDays($request->extension_days);

        $loan->update([
            'return_date' => $newReturnDate,
            'status_peminjaman' => 'diperpanjang',
        ]);

        return redirect()->route('dashboard.returns.index')
            ->with('success', 'Perpanjangan peminjaman berhasil dilakukan hingga ' . $newReturnDate->format('d/m/Y'));
    }

    /**
     * Mengirim reminder secara manual untuk peminjaman tertentu
     */
    public function manualReminder(BookLoan $loan)
    {
        try {
            // Validasi apakah loan masih aktif
            if (!in_array($loan->status_peminjaman, ['dipinjam', 'diperpanjang'])) {
                return redirect()->route('dashboard.returns.index')
                    ->with('error', 'Tidak dapat mengirim reminder untuk buku yang sudah dikembalikan');
            }

            // Validasi apakah pengguna punya email
            if (!$loan->user->email) {
                return redirect()->route('dashboard.returns.index')
                    ->with('error', 'Siswa tidak memiliki alamat email yang terdaftar');
            }

            // Tentukan tipe reminder berdasarkan waktu jatuh tempo
            $today = Carbon::today();
            $returnDate = Carbon::parse($loan->return_date);
            $daysRemaining = $today->diffInDays($returnDate, false);

            $reminderType = 'on_due'; // default
            if ($daysRemaining > 0) {
                $reminderType = 'before_due';
            } elseif ($daysRemaining < 0) {
                $reminderType = 'after_due';
            }

            // Kirim email reminder
            \Illuminate\Support\Facades\Mail::to($loan->user->email)
                ->send(new \App\Mail\LoanReminder($loan, $reminderType, $daysRemaining));

            // Simpan log pengiriman reminder
            $reminderLogs = json_decode($loan->reminder_logs, true) ?: [];
            $reminderLogs[] = [
                'type' => $reminderType,
                'sent_at' => Carbon::now()->toDateTimeString(),
                'days_remaining' => $daysRemaining,
                'sent_by' => auth()->user()->name,
                'sent_manually' => true
            ];

            $loan->reminder_logs = json_encode($reminderLogs);
            $loan->save();

            return redirect()->route('dashboard.returns.index')
                ->with('success', 'Reminder berhasil dikirim ke email ' . $loan->user->email);

        } catch (\Exception $e) {
            return redirect()->route('dashboard.returns.index')
                ->with('error', 'Gagal mengirim reminder: ' . $e->getMessage());
        }
    }
}
