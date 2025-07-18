<?php

namespace App\Mail;

use App\Models\BookLoan;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LoanReminder extends Mailable
{
    use Queueable, SerializesModels;

    public $loan;
    public $reminderType;
    public $daysRemaining;

    /**
     * Create a new message instance.
     */
    public function __construct(BookLoan $loan, string $reminderType, int $daysRemaining = 0)
    {
        $this->loan = $loan;
        $this->reminderType = $reminderType;
        $this->daysRemaining = $daysRemaining;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $subject = match ($this->reminderType) {
            'before_due' => 'Pengingat: Buku Anda Jatuh Tempo Besok',
            'on_due' => 'Pengingat: Buku Anda Jatuh Tempo Hari Ini',
            'after_due' => 'Pengingat: Buku Anda Sudah Melewati Jatuh Tempo',
            default => 'Pengingat Pengembalian Buku Perpustakaan'
        };

        return new Envelope(
            subject: $subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.loan-reminder',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}