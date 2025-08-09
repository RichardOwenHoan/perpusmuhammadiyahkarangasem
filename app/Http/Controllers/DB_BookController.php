<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;

class DB_BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $books = Book::with('categories')
            ->where('archived', 0)
            ->get();

        return view('Dashboard.Book.index', compact('books'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return view('Dashboard.Book.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255|unique:books,judul',
            'kode_buku' => 'required|string|max:255|unique:books',
            'pengarang' => 'required|string|max:255',
            'penerbit' => 'required|string|max:255',
            'tahun_terbit' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'stok' => 'required|integer|min:0',
            'intisari' => 'nullable|string',
            // 'kondisi' => 'required|string|max:255',
            'category_ids' => 'required|array',
            'category_ids.*' => 'exists:categories,id',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ], [
            'judul.required' => 'Judul buku wajib diisi.',
            'judul.unique' => 'Judul buku sudah ada.',
            'judul.string' => 'Judul buku harus berupa teks.',
            'judul.max' => 'Judul buku tidak boleh lebih dari 255 karakter.',
            'kode_buku.required' => 'Kode buku wajib diisi.',
            'kode_buku.unique' => 'Kode buku sudah digunakan.',
            'pengarang.required' => 'Pengarang wajib diisi.',
            'penerbit.required' => 'Penerbit wajib diisi.',
            'tahun_terbit.required' => 'Tahun terbit wajib diisi.',
            'tahun_terbit.digits' => 'Tahun terbit harus berupa 4 digit.',
            'tahun_terbit.min' => 'Tahun terbit tidak boleh kurang dari 1900.',
            'tahun_terbit.max' => 'Tahun terbit tidak boleh lebih dari ' . (date('Y') + 1) . '.',
            'stok.required' => 'Stok wajib diisi.',
            'stok.integer' => 'Stok harus berupa angka.',
            'stok.min' => 'Stok tidak boleh kurang dari 0.',
            // 'kondisi.required' => 'Kondisi buku wajib diisi.',
            'category_ids.required' => 'Kategori wajib dipilih.',
            'category_ids.array' => 'Kategori harus berupa array.',
            'category_ids.*.exists' => 'Kategori yang dipilih tidak valid.',
            'gambar.image' => 'File harus berupa gambar.',
            'gambar.mimes' => 'Gambar harus berformat jpeg, png, jpg, atau gif.',
            'gambar.max' => 'Ukuran gambar tidak boleh lebih dari 2MB.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $bookData = [
            'judul' => $request->judul,
            'kode_buku' => $request->kode_buku,
            'pengarang' => $request->pengarang,
            'penerbit' => $request->penerbit,
            'tahun_terbit' => $request->tahun_terbit,
            'stok' => $request->stok,
            'intisari' => $request->intisari,
            // 'kondisi' => $request->kondisi,
        ];

        // Upload gambar jika ada
        if ($request->hasFile('gambar') && $request->file('gambar')->isValid()) {
            $gambarPath = $request->file('gambar')->store('books', 'public');
            $bookData['gambar'] = $gambarPath;
        }

        $book = Book::create($bookData);

        $book->categories()->attach($request->category_ids);

        return redirect()->route('books.index')
            ->with('success', 'Buku berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        $book->load('categories');
        return view('Dashboard.Book.show', compact('book'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        $categories = Category::all();
        $selectedCategories = $book->categories->pluck('id')->toArray();
        return view('Dashboard.Book.edit', compact('book', 'categories', 'selectedCategories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255|unique:books,judul,' . $book->id,
            'kode_buku' => 'required|string|max:255|unique:books,kode_buku,' . $book->id,
            'pengarang' => 'required|string|max:255',
            'penerbit' => 'required|string|max:255',
            'tahun_terbit' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'stok' => 'required|integer|min:0',
            'intisari' => 'nullable|string',
            // 'kondisi' => 'required|string|max:255',
            'category_ids' => 'required|array',
            'category_ids.*' => 'exists:categories,id',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ], [
            'judul.required' => 'Judul buku wajib diisi.',
            'judul.unique' => 'Judul buku sudah ada.',
            'judul.string' => 'Judul buku harus berupa teks.',
            'judul.max' => 'Judul buku tidak boleh lebih dari 255 karakter.',
            'kode_buku.required' => 'Kode buku wajib diisi.',
            'kode_buku.unique' => 'Kode buku sudah digunakan.',
            'pengarang.required' => 'Pengarang wajib diisi.',
            'penerbit.required' => 'Penerbit wajib diisi.',
            'tahun_terbit.required' => 'Tahun terbit wajib diisi.',
            'tahun_terbit.digits' => 'Tahun terbit harus berupa 4 digit.',
            'tahun_terbit.min' => 'Tahun terbit tidak boleh kurang dari 1900.',
            'tahun_terbit.max' => 'Tahun terbit tidak boleh lebih dari ' . (date('Y') + 1) . '.',
            'stok.required' => 'Stok wajib diisi.',
            'stok.integer' => 'Stok harus berupa angka.',
            'stok.min' => 'Stok tidak boleh kurang dari 0.',
            // 'kondisi.required' => 'Kondisi buku wajib diisi.',
            'category_ids.required' => 'Kategori wajib dipilih.',
            'category_ids.array' => 'Kategori harus berupa array.',
            'category_ids.*.exists' => 'Kategori yang dipilih tidak valid.',
            'gambar.image' => 'File harus berupa gambar.',
            'gambar.mimes' => 'Gambar harus berformat jpeg, png, jpg, atau gif.',
            'gambar.max' => 'Ukuran gambar tidak boleh lebih dari 2MB.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $bookData = [
            'judul' => $request->judul,
            'kode_buku' => $request->kode_buku,
            'pengarang' => $request->pengarang,
            'penerbit' => $request->penerbit,
            'tahun_terbit' => $request->tahun_terbit,
            'stok' => $request->stok,
            'intisari' => $request->intisari,
            // 'kondisi' => $request->kondisi,
        ];

        // Upload gambar baru jika ada
        if ($request->hasFile('gambar') && $request->file('gambar')->isValid()) {
            // Hapus gambar lama jika ada
            if ($book->gambar && Storage::disk('public')->exists($book->gambar)) {
                Storage::disk('public')->delete($book->gambar);
            }

            $gambarPath = $request->file('gambar')->store('books', 'public');
            $bookData['gambar'] = $gambarPath;
        }

        $book->update($bookData);

        $book->categories()->sync($request->category_ids);

        return redirect()->route('books.index')
            ->with('success', 'Buku berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        // Hapus gambar buku jika ada
        if ($book->gambar && Storage::disk('public')->exists($book->gambar)) {
            Storage::disk('public')->delete($book->gambar);
        }

        // $book->categories()->detach();
        // $book->bookLoans()->delete(); // Hapus semua peminjaman terkait
        $book->update([
            'archived' => 1,
        ]);

        return redirect()->route('books.index')
            ->with('success', 'Buku berhasil dihapus.');
    }
}
