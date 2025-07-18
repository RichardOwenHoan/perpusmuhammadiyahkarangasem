<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\BookLoan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $fines = BookLoan::with(['user', 'book'])
            ->where('status_peminjaman', 'dikembalikan')
            ->where('denda', '>', 0)
            ->where('status_denda', 'belum_dibayar')
            ->orderBy('actual_return_date', 'asc')
            ->paginate(10);


            // $keterlambatan = $fines->first()->return_date->diffInDays($fines->first()->due_date);    


        return view('Dashboard.Fine.index', compact('fines'));
    }

    /**
     * Mark a fine as paid
     */
    public function markAsPaid(BookLoan $fine)
    {

        $fine->update([
            'status_denda' => 'dibayar',
            'status_peminjaman' => 'dikembalikan'
        ]);

        return redirect()->route('dashboard.fines.index')
            ->with('success', 'Denda berhasil ditandai sebagai sudah dibayar');
    }

    /**
     * Show history of paid fines
     */
    public function history()
    {
        $paidFines = BookLoan::with(['user', 'book'])
            ->where('status_peminjaman', 'dikembalikan')
            ->where('denda', '>', 0)
            ->where('status_denda', 'dibayar')
            ->orderBy('updated_at', 'desc')
            ->paginate(10);

        return view('Dashboard.Fine.history', compact('paidFines'));
    }
}
