<?php

namespace App\Http\Controllers\Admin;

use App\Exports\LoanExport;
use App\Http\Controllers\Controller;
use App\Mail\BookLoanVerificationMail;
use App\Mail\BookLoanRejectionMail;
use App\Models\Book;
use App\Models\BookLoan;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $loans = BookLoan::with(['user', 'book'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('Dashboard.Loan.index', compact('loans'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BookLoan $loan)
    {
        $loan->load(['user', 'book']);

        return view('Dashboard.Loan.show', compact('loan'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookLoan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookLoan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookLoan $loan)
    {
        // Jika status peminjaman masih dipinjam atau diperpanjang,
        // kembalikan stok buku
        if (in_array($loan->status_peminjaman, ['dipinjam', 'diperpanjang'])) {
            $loan->book->increment('stok');
        }

        $loan->delete();

        return redirect()->route('admin.loans.index')
            ->with('success', 'Data peminjaman berhasil dihapus');
    }

    /**
     * Verify loan and send email to borrower
     */
    public function verify(Request $request, BookLoan $loan)
    {
        $request->validate([
            'catatan' => 'required|string|max:1000',
        ], [
            'catatan.max' => 'Catatan maksimal 1000 karakter.',
        ]);

        $loan->update([
            'status_verifikasi' => 'verified',
            'status_peminjaman' => 'dipinjam',
            'catatan' => $request->catatan,
        ]);

        // Kirim email verifikasi peminjaman
        $user = $loan->user;
        Mail::to($user->email)->send(new BookLoanVerificationMail($loan));

        return redirect()->route('dashboard.loans.index')
            ->with('success', 'Peminjaman berhasil diverifikasi dan email notifikasi telah dikirim');
    }

    /**
     * Reject loan with reason
     */
    public function reject(Request $request, BookLoan $loan)
    {
        $request->validate([
            'keterangan_penolakan' => 'required|string|max:1000',
        ], [
            'keterangan_penolakan.required' => 'Alasan penolakan wajib diisi.',
            'keterangan_penolakan.max' => 'Alasan penolakan maksimal 1000 karakter.',
        ]);

        $loan->update([
            'status_verifikasi' => 'ditolak',
            'status_peminjaman' => null,
            'keterangan_penolakan' => $request->keterangan_penolakan,
        ]);

        // Kembalikan stok buku karena peminjaman ditolak
        $loan->book->increment('stok');

        // Kirim email penolakan peminjaman
        $user = $loan->user;
        Mail::to($user->email)->send(new BookLoanRejectionMail($loan));

        return redirect()->route('dashboard.loans.index')
            ->with('success', 'Peminjaman berhasil ditolak dengan alasan: ' . $request->keterangan_penolakan);
    }

    /**
     * Menampilkan daftar siswa yang perlu ditindaklanjuti
     */
    public function needAttention()
    {
        $loans = BookLoan::with(['user', 'book'])
            ->where('need_attention', true)
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->orderBy('return_date', 'asc')
            ->paginate(10);

        return view('admin.loans.need-attention', compact('loans'));
    }

    /**
     * Menandai peminjaman sudah ditindaklanjuti
     */
    public function markResolved($id)
    {
        $loan = BookLoan::findOrFail($id);

        // Ubah status menjadi sudah ditindaklanjuti
        $loan->need_attention = false;
        $loan->save();

        return redirect()->route('admin.loans.need-attention')
            ->with('success', 'Peminjaman berhasil ditandai sudah ditindaklanjuti');
    }

    /**
     * Export loan data to Excel
     */
    public function export(Request $request)
    {
        $request->validate([
            'from' => 'required|date',
            'to' => 'required|date',
        ]);

        $loans = \App\Models\BookLoan::with(['user', 'book'])
            ->whereBetween('loan_date', [$request->from, $request->to])
            ->get();

        $pdf = Pdf::loadView('exports.loans_pdf', [
            'loans' => $loans,
            'from' => $request->from,
            'to' => $request->to,
        ]);

        return $pdf->download('daftar_peminjaman.pdf');
    }
}
