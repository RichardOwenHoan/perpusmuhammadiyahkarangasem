<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BookLoan extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'book_id',
        'user_id',
        'loan_date',
        'return_date',
        'actual_return_date',
        'status_verifikasi',
        'status_peminjaman',
        'denda',
        'status_denda',
        'keterangan_penolakan',
        'catatan'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'loan_date' => 'date',
        'return_date' => 'date',
        'actual_return_date' => 'date',
        'denda' => 'decimal:2',
    ];

    /**
     * Get the user that owns the loan.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the book that is being loaned.
     */
    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class);
    }

    /**
     * Accessor untuk mendapatkan jumlah reminder yang telah dikirim
     */
    public function getReminderCountAttribute()
    {
        if (!$this->reminder_logs) {
            return 0;
        }

        $logs = json_decode($this->reminder_logs, true);
        return is_array($logs) ? count($logs) : 0;
    }
}
