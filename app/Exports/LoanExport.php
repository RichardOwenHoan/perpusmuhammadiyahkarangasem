<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LoanExport implements FromCollection, WithHeadings
{
    protected $from;
    protected $to;

    public function __construct($from, $to)
    {
        $this->from = $from;
        $this->to = $to;
    }

    public function collection()
    {
        return \App\Models\BookLoan::with(['user', 'book'])
            ->whereBetween('loan_date', [$this->from, $this->to])
            ->get()
            ->map(function ($loan) {
                return [
                    $loan->id,
                    $loan->book->judul ?? '',
                    $loan->user->name ?? '',
                    $loan->loan_date,
                    $loan->return_date,
                    $loan->actual_return_date,
                    $loan->status_verifikasi,
                    $loan->status_peminjaman,
                    $loan->denda,
                    $loan->need_attention,
                    $loan->reminder_logs,
                    $loan->status_denda,
                    $loan->keterangan_penolakan,
                    $loan->created_at,
                    $loan->updated_at,
                    $loan->catatan,
                ];
            });
    }

    public function headings(): array
    {
        return [
            'ID',
            'Judul Buku',
            'Nama Peminjam',
            'Tanggal Pinjam',
            'Tanggal Kembali',
            'Tanggal Dikembalikan',
            'Status Verifikasi',
            'Status Peminjaman',
            'Denda',
            'Perlu Perhatian',
            'Log Reminder',
            'Status Denda',
            'Keterangan Penolakan',
            'Created At',
            'Updated At',
            'Catatan',
        ];
    }
}
