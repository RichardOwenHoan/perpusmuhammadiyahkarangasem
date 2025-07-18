<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'judul' => 'Laskar Pelangi',
                'kode_buku' => 'BK001',
                'pengarang' => 'Andrea Hirata',
                'penerbit' => 'Bentang Pustaka',
                'tahun_terbit' => 2005,
                'stok' => 10,
                'intisari' => 'Novel tentang perjuangan anak-anak di Belitung untuk mendapatkan pendidikan yang layak.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Bumi Manusia',
                'kode_buku' => 'BK002',
                'pengarang' => 'Pramoedya Ananta Toer',
                'penerbit' => 'Hasta Mitra',
                'tahun_terbit' => 1980,
                'stok' => 5,
                'intisari' => 'Novel sejarah yang menceritakan tentang pergerakan nasionalisme Indonesia di awal abad ke-20.',
                // 'kondisi' => 'Rusak Ringan',
            ],
            [
                'judul' => 'Filosofi Teras',
                'kode_buku' => 'BK003',
                'pengarang' => 'Henry Manampiring',
                'penerbit' => 'Kompas',
                'tahun_terbit' => 2018,
                'stok' => 15,
                'intisari' => 'Buku yang mengenalkan filosofi Stoa untuk mengatasi kecemasan dan overthinking.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Pulang',
                'kode_buku' => 'BK004',
                'pengarang' => 'Tere Liye',
                'penerbit' => 'Republika',
                'tahun_terbit' => 2015,
                'stok' => 7,
                'intisari' => 'Novel yang mengisahkan tentang perjalanan seorang anak laki-laki yang menjadi bagian dari shadow economy.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Perahu Kertas',
                'kode_buku' => 'BK005',
                'pengarang' => 'Dee Lestari',
                'penerbit' => 'Bentang Pustaka',
                'tahun_terbit' => 2009,
                'stok' => 8,
                'intisari' => 'Kisah cinta dua seniman muda yang dipertemukan oleh takdir.',
                // 'kondisi' => 'Rusak Ringan',
            ],
            [
                'judul' => 'Sang Pemimpi',
                'kode_buku' => 'BK006',
                'pengarang' => 'Andrea Hirata',
                'penerbit' => 'Bentang Pustaka',
                'tahun_terbit' => 2006,
                'stok' => 12,
                'intisari' => 'Sekuel dari Laskar Pelangi yang mengisahkan perjalanan Ikal dan kawan-kawannya mengejar mimpi.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Negeri 5 Menara',
                'kode_buku' => 'BK007',
                'pengarang' => 'Ahmad Fuadi',
                'penerbit' => 'Gramedia',
                'tahun_terbit' => 2009,
                'stok' => 10,
                'intisari' => 'Novel tentang kehidupan di pesantren dan kekuatan mimpi lima orang santri.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Atomic Habits',
                'kode_buku' => 'BK008',
                'pengarang' => 'James Clear',
                'penerbit' => 'Penguin Random House',
                'tahun_terbit' => 2018,
                'stok' => 20,
                'intisari' => 'Buku tentang bagaimana kebiasaan kecil dapat membawa perubahan besar dalam hidup.',
                // 'kondisi' => 'Baik',
            ],
            [
                'judul' => 'Sejarah Indonesia Modern',
                'kode_buku' => 'BK009',
                'pengarang' => 'M.C. Ricklefs',
                'penerbit' => 'Serambi',
                'tahun_terbit' => 2001,
                'stok' => 4,
                'intisari' => 'Buku sejarah yang mengulas perkembangan Indonesia dari masa kolonial hingga modern.',
                // 'kondisi' => 'Rusak Berat',
            ],
            [
                'judul' => 'Fisika Dasar',
                'kode_buku' => 'BK010',
                'pengarang' => 'Halliday & Resnick',
                'penerbit' => 'Erlangga',
                'tahun_terbit' => 2018,
                'stok' => 15,
                'intisari' => 'Buku teks fisika yang membahas konsep dasar mekanika, termodinamika, dan elektromagnetik.',
                // 'kondisi' => 'Baik',
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}