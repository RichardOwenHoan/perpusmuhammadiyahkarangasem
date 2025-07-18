<!DOCTYPE html>
<html>
<head>
    <title>Konfirmasi Peminjaman Buku</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #3490dc;
            margin-top: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #666;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Konfirmasi Peminjaman Buku</h1>
        
        <p>Halo {{ $bookLoan->user->name }},</p>
        
        <p>Peminjaman buku Anda telah diverifikasi dan disetujui. Berikut detail peminjaman:</p>
        
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
                <th>Tanggal Peminjaman</th>
                <td>{{ $bookLoan->loan_date->format('d/m/Y') }}</td>
            </tr>
            <tr>
                <th>Tanggal Pengembalian</th>
                <td>{{ $bookLoan->return_date->format('d/m/Y') }}</td>
            </tr>
        </table>
        
        <p>Mohon untuk mengembalikan buku tepat waktu sesuai dengan tanggal pengembalian yang telah ditentukan. Jika terlambat, Anda akan dikenakan denda sesuai dengan ketentuan perpustakaan.</p>
        
        <p>Terima kasih atas kunjungan Anda ke perpustakaan kami.</p>
        
        <div class="footer">
            <p>Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
        </div>
    </div>
</body>
</html> 