<?php

namespace App\Console\Commands;

use App\Mail\LoanReminder;
use App\Models\BookLoan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class TestLoanReminderEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder:test {email} {loan_id} {type=before_due}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Mengirim email pengingat uji ke alamat tertentu';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');
        $loanId = $this->argument('loan_id');
        $type = $this->argument('type');

        $this->info("Mengirim email uji ke: $email");
        $this->info("Tipe reminder: $type");

        $loan = BookLoan::with(['user', 'book'])->findOrFail($loanId);

        $daysRemaining = 0;

        if ($type == 'before_due') {
            $daysRemaining = 1;
        } elseif ($type == 'after_due') {
            $daysRemaining = -1;
        }

        try {
            Mail::to($email)->send(new LoanReminder($loan, $type, $daysRemaining));

            // Catat log pengiriman reminder uji coba
            $reminderLogs = json_decode($loan->reminder_logs, true) ?: [];
            $reminderLogs[] = [
                'type' => $type,
                'sent_at' => Carbon::now()->toDateTimeString(),
                'days_remaining' => $daysRemaining,
                'sent_by' => 'test-command',
                'sent_manually' => true
            ];

            $loan->reminder_logs = json_encode($reminderLogs);
            $loan->save();

            $this->info("Email berhasil dikirim ke $email!");
        } catch (\Exception $e) {
            $this->error("Gagal mengirim email: " . $e->getMessage());
        }

        return 0;
    }
}