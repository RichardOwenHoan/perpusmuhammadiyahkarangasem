<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Siswa',
            'email' => 'siswa@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'siswa',
            'nis' => '1234567890',
            'kelas' => 'XII IPA 1',
        ]);

        // Jalankan seeder untuk tabel utama terlebih dahulu
        $this->call([
            CategorySeeder::class,
            BookSeeder::class,
                // Setelah data utama tersedia, baru jalankan seeder untuk tabel pivot
            BookCategorySeeder::class,
        ]);
    }
}
