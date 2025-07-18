<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // Jalankan reminder email setiap hari pukul 10:00 pagi
        $schedule->command('reminders:loan')->dailyAt('10:00');

        // Tandai siswa yang perlu ditindaklanjuti (setelah 3 hari keterlambatan)
        $schedule->command('loans:mark-overdue-students')->dailyAt('11:00');
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
