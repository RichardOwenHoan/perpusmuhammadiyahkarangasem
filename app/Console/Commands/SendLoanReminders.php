<?php

namespace App\Console\Commands;

use App\Mail\LoanReminder;
use App\Models\BookLoan;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendLoanReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminders:loan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Kirim email pengingat untuk peminjaman buku yang akan/sudah jatuh tempo';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();
        $yesterday = Carbon::yesterday();

        // 1. Reminder pertama: 1 hari sebelum jatuh tempo
        $beforeDueLoans = BookLoan::with(['user', 'book'])
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->whereDate('return_date', $tomorrow)
            ->where('status_verifikasi', 'verified')
            ->get();

        $this->sendReminders($beforeDueLoans, 'before_due', 1);

        // 2. Reminder kedua: pada hari jatuh tempo
        $onDueLoans = BookLoan::with(['user', 'book'])
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->whereDate('return_date', $today)
            ->where('status_verifikasi', 'verified')
            ->get();

        $this->sendReminders($onDueLoans, 'on_due', 0);

        // 3. Reminder ketiga: 1 hari setelah jatuh tempo
        $afterDueLoans = BookLoan::with(['user', 'book'])
            ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
            ->whereDate('return_date', $yesterday)
            ->where('status_verifikasi', 'verified')
            ->get();

        $this->sendReminders($afterDueLoans, 'after_due', -1);

        $this->info('Semua email pengingat peminjaman berhasil dikirim!');
    }

    /**
     * Mengirim email reminder untuk setiap peminjaman
     */
    private function sendReminders($loans, $reminderType, $daysRemaining)
    {
        foreach ($loans as $loan) {
            if (!$loan->user || !$loan->user->email) {
                $this->warn("Siswa dengan ID {$loan->user_id} tidak memiliki email yang terdaftar.");
                continue;
            }

            try {
                Mail::to($loan->user->email)->send(new LoanReminder($loan, $reminderType, $daysRemaining));

                // Catat log pengiriman reminder
                $reminderLogs = json_decode($loan->reminder_logs, true) ?: [];
                $reminderLogs[] = [
                    'type' => $reminderType,
                    'sent_at' => Carbon::now()->toDateTimeString(),
                    'days_remaining' => $daysRemaining,
                    'sent_by' => 'system',
                    'sent_manually' => false
                ];

                $loan->reminder_logs = json_encode($reminderLogs);
                $loan->save();

                $this->info("Reminder {$reminderType} terkirim ke {$loan->user->email} untuk buku {$loan->book->judul}");
            } catch (\Exception $e) {
                $this->error("Gagal mengirim email ke {$loan->user->email}: {$e->getMessage()}");
            }
        }
    }
}