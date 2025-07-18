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
        Schema::table('book_loans', function (Blueprint $table) {
            $table->boolean('need_attention')->default(false)->after('denda')->comment('Tandai peminjaman yang perlu ditindaklanjuti karena keterlambatan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('book_loans', function (Blueprint $table) {
            $table->dropColumn('need_attention');
        });
    }
};
