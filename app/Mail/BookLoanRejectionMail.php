<?php

namespace App\Mail;

use App\Models\BookLoan;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BookLoanRejectionMail extends Mailable
{
    use Queueable, SerializesModels;

    public $bookLoan;

    /**
     * Create a new message instance.
     */
    public function __construct(BookLoan $bookLoan)
    {
        $this->bookLoan = $bookLoan;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Penolakan Peminjaman Buku - Perpustakaan SMP Muhammadiyah Karang Asem',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.book-loan-rejection',
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
