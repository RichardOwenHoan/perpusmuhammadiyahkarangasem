<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pengingat Pengembalian Buku</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #0d6efd;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
        }
        .book-info {
            background-color: #ffffff;
            border: 1px solid #eee;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        .book-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        .warning {
            color: #dc3545;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            background-color: #0d6efd;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Pengingat Pengembalian Buku</h1>
        </div>
        
        <div class="content">
            <p>Halo <strong>{{ $loan->user->name }}</strong>,</p>
            
            @if($reminderType == 'before_due')
                <p>Kami ingin mengingatkan bahwa buku yang Anda pinjam akan <strong>jatuh tempo besok</strong>. Harap segera kembalikan buku ke perpustakaan atau perpanjang masa peminjaman jika dibutuhkan.</p>
            @elseif($reminderType == 'on_due')
                <p>Kami ingin mengingatkan bahwa buku yang Anda pinjam <strong>jatuh tempo hari ini</strong>. Harap segera kembalikan buku ke perpustakaan atau perpanjang masa peminjaman jika dibutuhkan.</p>
            @elseif($reminderType == 'after_due')
                <p class="warning">Kami ingin mengingatkan bahwa buku yang Anda pinjam <strong>telah melewati jatuh tempo</strong>. Mohon segera kembalikan buku tersebut ke perpustakaan untuk menghindari denda keterlambatan lebih lanjut.</p>
                <p class="warning">Denda keterlambatan: Rp 1.000 per hari keterlambatan.</p>
            @endif
            
            <div class="book-info">
                <p class="book-title">{{ $loan->book->judul }}</p>
                <p><strong>Pengarang:</strong> {{ $loan->book->pengarang }}</p>
                <p><strong>Kode Buku:</strong> {{ $loan->book->kode_buku }}</p>
                <p><strong>Tanggal Peminjaman:</strong> {{ $loan->loan_date->format('d-m-Y') }}</p>
                <p><strong>Jatuh Tempo:</strong> {{ $loan->return_date->format('d-m-Y') }}</p>
                
                @if($reminderType == 'after_due')
                    <p class="warning"><strong>Keterlambatan:</strong> {{ abs($daysRemaining) }} hari</p>
                    <p class="warning"><strong>Denda:</strong> Rp {{ number_format(abs($daysRemaining) * 1000, 0, ',', '.') }}</p>
                @endif
            </div>
            
            <p>Terima kasih atas kerjasamanya. Jika Anda memiliki pertanyaan, silakan hubungi petugas perpustakaan.</p>
            
            <a href="{{ route('siswa.books.loans.history') }}" class="button">Lihat Detail Peminjaman</a>
        </div>
        
        <div class="footer">
            <p>Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
            <p>&copy; {{ date('Y') }} Perpustakaan SMP Muhammadiyah Karang Asem Bali</p>
        </div>
    </div>
</body>
</html> 