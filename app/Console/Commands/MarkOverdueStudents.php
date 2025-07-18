<?php

namespace App\Console\Commands;

use App\Models\BookLoan;
use Carbon\Carbon;
use Illuminate\Console\Command;

class MarkOverdueStudents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'loans:mark-overdue-students';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Menandai siswa yang belum mengembalikan buku setelah 3 hari jatuh tempo untuk ditindaklanjuti';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $thresholdDate = Carbon::today()->subDays(3); // 3 hari setelah jatuh tempo

        // Dapatkan semua siswa yang belum mengembalikan buku meskipun sudah 3 hari lewat jatuh tempo
        $overdueLoans = BookLoan::with(['user', 'book'])
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->where('status_verifikasi', 'verified')
            ->whereDate('return_date', '<', $thresholdDate)
            ->where(function ($query) {
                $query->where('need_attention', false)
                    ->orWhereNull('need_attention');
            })
            ->get();

        $markedCount = 0;

        foreach ($overdueLoans as $loan) {
            // Tandai perlu perhatian khusus
            $loan->need_attention = true;
            $loan->save();

            $daysLate = Carbon::today()->diffInDays($loan->return_date, false) * -1;
            $denda = $daysLate * 1000;

            $phoneNumber = 'Tidak tersedia';
            if (isset($loan->user->phone)) {
                $phoneNumber = $loan->user->phone;
            }

            $this->info("Siswa {$loan->user->name} ditandai memerlukan tindakan lanjutan:");
            $this->info("- Buku: {$loan->book->judul}");
            $this->info("- Terlambat: {$daysLate} hari");
            $this->info("- Denda: Rp " . number_format($denda, 0, ',', '.'));
            $this->info("- Email: {$loan->user->email}");
            $this->info("- No. Telepon: {$phoneNumber}");
            $this->info("--------------------------------------------");

            $markedCount++;
        }

        if ($markedCount > 0) {
            $this->info("Total $markedCount siswa ditandai perlu tindak lanjut.");
        } else {
            $this->info("Tidak ada siswa yang perlu ditindaklanjuti.");
        }

        return 0;
    }
}