<?php

namespace App\Http\Controllers\LandingPage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;

class HomeController extends Controller
{
    public function index()
    {
        // Ambil 4 buku terbaru
        $latestBooks = Book::orderBy('created_at', 'desc')->take(4)->get();

        // Ambil buku berdasarkan stok tersedia (populer)
        $popularBooks = Book::where('stok', '>', 0)
            ->orderBy('stok', 'asc')
            ->take(4)
            ->get();

        // Ambil semua kategori 
        $categories = Category::all();

        return view('LandingPage.home', compact('latestBooks', 'popularBooks', 'categories'));
    }
}