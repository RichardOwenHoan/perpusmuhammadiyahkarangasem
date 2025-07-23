<?php

namespace App\Http\Controllers\LandingPage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;

class BookController extends Controller
{
    public function index(Request $request)
    {
        // Query dasar
        $query = Book::query();

        // Filter berdasarkan kategori jika ada
        if ($request->filled('category')) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->where('categories.id', $request->category);
            });
        }

        // Filter berdasarkan pencarian
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('judul', 'like', "%{$search}%")
                    ->orWhere('pengarang', 'like', "%{$search}%")
                    ->orWhere('penerbit', 'like', "%{$search}%");
            });
        }

        // Filter berdasarkan tahun terbit
        if ($request->filled('tahun')) {
            $query->where('tahun_terbit', $request->tahun);
        }

        // // Filter berdasarkan kondisi buku
        // if ($request->filled('kondisi')) {
        //     $query->where('kondisi', 'like', '%' . $request->kondisi . '%');
        // }

        // Urutkan berdasarkan
        $sortBy = $request->sortBy ?? 'judul';
        $sortDirection = $request->sortDirection ?? 'asc';

        $query->orderBy($sortBy, $sortDirection);

        // Ambil data buku dengan paginasi
        $books = $query->paginate(12);

        // Ambil semua kategori untuk filter
        $categories = Category::all();

        // Mendapatkan tahun-tahun terbit unik untuk filter
        $years = Book::distinct()->orderBy('tahun_terbit', 'desc')->pluck('tahun_terbit');

        return view('LandingPage.books.index', compact('books', 'categories', 'years'));
    }

    public function show($id)
    {
        $book = Book::findOrFail($id);

        // Buku terkait berdasarkan kategori yang sama
        $relatedBooks = Book::whereHas('categories', function ($query) use ($book) {
            $query->whereIn('categories.id', $book->categories->pluck('id'));
        })
            ->where('id', '!=', $book->id)
            ->take(4)
            ->get();

        return view('LandingPage.books.show', compact('book', 'relatedBooks'));
    }
}
