<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\BookLoan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class BookLoanController extends Controller
{
    /**
     * Fungsi untuk meminjam buku
     */
    public function borrow(Request $request, $id)
    {
        // Validasi data
        $request->validate([
            'loan_date' => 'required|date|after_or_equal:today',
            'return_date' => 'required|date|after:loan_date',
        ], [
            'loan_date.required' => 'Tanggal pinjam wajib diisi.',
            'loan_date.date' => 'Tanggal pinjam harus berupa tanggal yang valid.',
            'loan_date.after_or_equal' => 'Tanggal pinjam tidak boleh kurang dari hari ini.',
            'return_date.required' => 'Tanggal kembali wajib diisi.',
            'return_date.date' => 'Tanggal kembali harus berupa tanggal yang valid.',
            'return_date.after' => 'Tanggal kembali harus setelah tanggal pinjam.',
        ]);

        // Dapatkan data buku
        $book = Book::findOrFail($id);
        $user = Auth::user();

        // Cek apakah buku tersedia
        if ($book->stok <= 0) {
            return redirect()->back()->with('error', 'Maaf, buku ini sedang tidak tersedia.');
        }

        // Cek apakah siswa sudah meminjam buku lain yang belum dikembalikan
        $existingLoan = BookLoan::where('user_id', $user->id)
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->first();

        if ($existingLoan) {
            return redirect()->back()->with('error', 'Maaf, Anda sudah meminjam buku lain yang belum dikembalikan.');
        }

        // Buat catatan peminjaman baru
        BookLoan::create([
            'book_id' => $book->id,
            'user_id' => $user->id,
            'loan_date' => $request->loan_date,
            'return_date' => $request->return_date,
            'status_verifikasi' => 'pending',
            'status_peminjaman' => 'dipinjam',
            'status_denda' => 'tidak_ada',
        ]);

        // Kurangi stok buku
        $book->stok -= 1;
        $book->save();

        return redirect()->route('landing.books.show', $book->id)->with('success', 'Permintaan peminjaman buku berhasil dibuat. Silakan tunggu verifikasi dari petugas perpustakaan.');
    }

    /**
     * Fungsi untuk menampilkan form peminjaman buku
     */
    public function create($id)
    {
        $book = Book::findOrFail($id);
        $user = Auth::user();

        // Cek apakah buku tersedia
        if ($book->stok <= 0) {
            return redirect()->back()->with('error', 'Maaf, buku ini sedang tidak tersedia.');
        }

        // Cek apakah siswa sudah meminjam buku lain yang belum dikembalikan
        $existingLoan = BookLoan::where('user_id', $user->id)
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->first();

        if ($existingLoan) {
            return redirect()->back()->with('error', 'Maaf, Anda sudah meminjam buku lain yang belum dikembalikan.');
        }

        // Tanggal hari ini
        $today = Carbon::today()->format('Y-m-d');
        // Tanggal kembali default (7 hari dari sekarang)
        $returnDate = Carbon::today()->addDays(7)->format('Y-m-d');

        return view('LandingPage.books.borrow', compact('book', 'today', 'returnDate'));
    }

    /**
     * Fungsi untuk menampilkan riwayat peminjaman buku siswa
     */
    public function history()
    {
        $user = Auth::user();

        // Ambil semua peminjaman yang dimiliki oleh siswa tersebut
        $loans = BookLoan::with('book')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        // Ambil pinjaman aktif saat ini
        $activeLoan = BookLoan::with('book')
            ->where('user_id', $user->id)
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->first();

        return view('LandingPage.books.history', compact('loans', 'activeLoan'));
    }

    /**
     * Fungsi untuk menampilkan detail peminjaman buku
     */
    public function show($id)
    {
        $user = Auth::user();

        // Ambil data peminjaman
        $loan = BookLoan::with('book')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        // Hitung keterlambatan dan denda
        $today = Carbon::today();
        $returnDate = Carbon::parse($loan->return_date);
        $lateInDays = $today->diffInDays($returnDate, false);

        // Jika lateInDays negatif, artinya terlambat
        $fine = 0;
        if ($lateInDays < 0 && $loan->status_peminjaman != 'dikembalikan') {
            // Hitung denda: Rp 1.000 per hari keterlambatan
            $fine = abs($lateInDays) * 1000;

            // Update status denda jika belum ada
            if ($loan->status_denda == 'tidak_ada') {
                $loan->status_denda = 'belum_dibayar';
                $loan->denda = $fine;
                $loan->save();
            }
        }

        return view('LandingPage.books.loan-detail', compact('loan', 'fine'));
    }
}