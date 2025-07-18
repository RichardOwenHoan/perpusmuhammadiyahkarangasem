<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Penolakan Peminjaman Buku</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        h1 {
            color: #dc3545;
            text-align: center;
            margin-bottom: 30px;
        }
        .book-info {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #dc3545;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f8f9fa;
            font-weight: bold;
            width: 30%;
        }
        .rejection-reason {
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
        }
        .rejection-reason h3 {
            color: #721c24;
            margin-top: 0;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Penolakan Peminjaman Buku</h1>
        
        <p>Halo {{ $bookLoan->user->name }},</p>
        
        <p>Kami informasikan bahwa permintaan peminjaman buku Anda telah <strong>ditolak</strong> oleh petugas perpustakaan.</p>
        
        <div class="book-info">
            <h3>Detail Peminjaman yang Ditolak:</h3>
            <table>
                <tr>
                    <th>Judul Buku</th>
                    <td>{{ $bookLoan->book->judul }}</td>
                </tr>
                <tr>
                    <th>Kode Buku</th>
                    <td>{{ $bookLoan->book->kode_buku }}</td>
                </tr>
                <tr>
                    <th>Tanggal Pengajuan</th>
                    <td>{{ $bookLoan->created_at->format('d/m/Y H:i') }}</td>
                </tr>
                <tr>
                    <th>Tanggal Peminjaman</th>
                    <td>{{ $bookLoan->loan_date->format('d/m/Y') }}</td>
                </tr>
                <tr>
                    <th>Tanggal Pengembalian</th>
                    <td>{{ $bookLoan->return_date->format('d/m/Y') }}</td>
                </tr>
            </table>
        </div>
        
        @if($bookLoan->keterangan_penolakan)
        <div class="rejection-reason">
            <h3>Alasan Penolakan:</h3>
            <p>{{ $bookLoan->keterangan_penolakan }}</p>
        </div>
        @endif
        
        <p>Jika Anda memiliki pertanyaan atau ingin mengajukan peminjaman ulang, silakan hubungi petugas perpustakaan atau kunjungi perpustakaan secara langsung.</p>
        
        <p>Terima kasih atas pengertian Anda.</p>
        
        <div class="footer">
            <p><strong>Perpustakaan SMP Muhammadiyah Karang Asem</strong></p>
            <p>Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
        </div>
    </div>
</body>
</html> 