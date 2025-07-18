<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Fiksi'],
            ['name' => 'Non-Fiksi'],
            ['name' => 'Pendidikan'],
            ['name' => 'Sejarah'],
            ['name' => 'Sains'],
            ['name' => 'Teknologi'],
            ['name' => 'Sastra'],
            ['name' => 'Hobi'],
            ['name' => 'Agama'],
            ['name' => 'Kesehatan'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}