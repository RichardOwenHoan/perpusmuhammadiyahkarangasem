<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('book_id')->constrained('books');
            $table->foreignId('user_id')->constrained('users');
            $table->date('loan_date');
            $table->date('return_date');
            $table->date('actual_return_date')->nullable();
            $table->enum('status_verifikasi', ['pending', 'verified', 'ditolak'])->default('pending');
            $table->enum('status_peminjaman', ['dipinjam', 'dikembalikan', 'diperpanjang'])->default(null)->nullable();
            $table->decimal('denda', 10, 2)->default(0);
            $table->enum('status_denda', ['belum_dibayar', 'dibayar', 'tidak_ada'])->default('tidak_ada');
            $table->text('keterangan_penolakan')->nullable();
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_loans');
    }
};
