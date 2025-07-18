<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Seeder;

class BookCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Definisikan mapping buku ke kategori
        // Key adalah ID buku, value adalah array dari ID kategori
        $bookCategoryMapping = [
            1 => [1, 7], // Laskar Pelangi: Fiksi, Sastra
            2 => [1, 4, 7], // Bumi Manusia: Fiksi, Sejarah, Sastra
            3 => [2, 3], // Filosofi Teras: Non-Fiksi, Pendidikan
            4 => [1, 7], // Pulang: Fiksi, Sastra
            5 => [1, 7], // Perahu Kertas: Fiksi, Sastra
            6 => [1, 7], // Sang Pemimpi: Fiksi, Sastra
            7 => [1, 7, 9], // Negeri 5 Menara: Fiksi, Sastra, Agama
            8 => [2, 3, 10], // Atomic Habits: Non-Fiksi, Pendidikan, Kesehatan
            9 => [2, 4], // Sejarah Indonesia Modern: Non-Fiksi, Sejarah
            10 => [3, 5, 6], // Fisika Dasar: Pendidikan, Sains, Teknologi
        ];

        // Ambil semua buku dan kategori dari database
        $books = Book::all();
        $categories = Category::all();

        // Buat relasi sesuai mapping
        foreach ($bookCategoryMapping as $bookId => $categoryIds) {
            $book = $books->find($bookId);
            if ($book) {
                foreach ($categoryIds as $categoryId) {
                    $category = $categories->find($categoryId);
                    if ($category) {
                        $book->categories()->attach($category);
                    }
                }
            }
        }
    }
}