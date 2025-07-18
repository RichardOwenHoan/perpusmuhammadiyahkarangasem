# Dokumentasi Halaman Daftar Buku

## Deskripsi

Halaman daftar buku memungkinkan pengunjung perpustakaan untuk:

1. Melihat semua buku yang tersedia di perpustakaan
2. Melakukan filter berdasarkan kategori, tahun terbit, dan kondisi buku
3. Melakukan pencarian berdasarkan judul, pengarang, dan penerbit
4. Mengurutkan hasil berdasarkan judul, tahun terbit, dan tanggal penambahan
5. Melihat detail informasi buku

## Struktur File

-   `app/Http/Controllers/LandingPage/BookController.php`: Controller untuk menangani logika halaman buku
-   `app/Models/Book.php`: Model untuk data buku
-   `app/Models/Category.php`: Model untuk kategori buku
-   `resources/views/LandingPage/books/index.blade.php`: View untuk menampilkan daftar buku
-   `resources/views/LandingPage/books/show.blade.php`: View untuk menampilkan detail buku
-   `database/migrations/2025_04_18_062803_create_books_table.php`: Migrasi untuk tabel buku
-   `database/migrations/2025_04_18_062757_create_categories_table.php`: Migrasi untuk tabel kategori
-   `database/migrations/2024_04_18_000000_create_book_category_table.php`: Migrasi untuk tabel pivot book_category

## Fitur Utama

### Daftar Buku

-   Menampilkan buku dalam format grid dengan gambar, judul, pengarang, penerbit
-   Paginasi untuk melihat lebih banyak hasil
-   Indikator stok tersedia

### Filter dan Pencarian

-   Pencarian berdasarkan judul, pengarang, dan penerbit
-   Filter berdasarkan kategori
-   Filter berdasarkan tahun terbit
-   Filter berdasarkan kondisi buku
-   Pengurutan hasil

### Detail Buku

-   Menampilkan semua informasi buku (judul, pengarang, penerbit, tahun terbit, dll)
-   Menampilkan status ketersediaan buku
-   Menampilkan deskripsi buku
-   Menampilkan buku terkait berdasarkan kategori yang sama
-   Tombol untuk meminjam buku jika tersedia

## Cara Menggunakan

1. Akses `/books` untuk melihat semua buku di perpustakaan
2. Gunakan form filter di sebelah kiri untuk memfilter hasil
3. Klik pada judul buku atau tombol detail untuk melihat informasi lengkap buku
4. Pada halaman detail, pengguna yang sudah login dapat meminjam buku jika stok tersedia

## Relasi Database

-   Buku dapat memiliki banyak kategori (many-to-many)
-   Kategori dapat memiliki banyak buku (many-to-many)

## Screenshoot

-   Nanti akan ditambahkan
