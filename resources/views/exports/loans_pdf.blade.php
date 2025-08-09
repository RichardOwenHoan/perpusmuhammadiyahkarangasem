<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Daftar Peminjaman</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 11px;
            margin: 0;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #0066cc;
            padding-bottom: 20px;
        }
        .header-content {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }
        .logo {
            width: 80px;
            height: 80px;
            margin-right: 20px;
        }
        .school-info {
            text-align: left;
        }
        .school-name {
            font-size: 18px;
            font-weight: bold;
            color: #0066cc;
            margin: 0;
            line-height: 1.2;
        }
        .school-subtitle {
            font-size: 14px;
            color: #333;
            margin: 2px 0;
        }
        .school-address {
            font-size: 10px;
            color: #666;
            margin: 5px 0 0 0;
        }
        .report-title {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin: 15px 0 5px 0;
        }
        .report-period {
            font-size: 12px;
            color: #666;
            margin: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #000;
            padding: 6px 4px;
            text-align: left;
            vertical-align: top;
            font-size: 10px;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
            text-align: center;
        }
        .nowrap {
            white-space: nowrap;
        }
        .text-center {
            text-align: center;
        }
        .footer {
            margin-top: 30px;
            text-align: right;
            font-size: 10px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <table style="width: 100%; border: none; margin: 0;">
            <tr>
                <td style="border: none; width: 100px; text-align: center; vertical-align: middle;">
                    <img src="{{ public_path('DB/assets/images/logo3.png') }}" alt="Logo SMP Muhammadiyah" class="logo">
                </td>
                <td style="border: none; text-align: center; vertical-align: middle;">
                    <h1 class="school-name">SMP MUHAMMADIYAH KARANG ASEM</h1>
                    <p class="school-subtitle">PERPUSTAKAAN SEKOLAH</p>
                    <p class="school-address">Jl. Raya Karang Asem, Kec. Karang Asem, Bali<br>
                    Telp: (0361) 123456 | Email: perpus@smpmuhkarangasem.sch.id</p>
                </td>
                <td style="border: none; width: 100px;"></td>
            </tr>
        </table>

        <h2 class="report-title">LAPORAN DAFTAR PEMINJAMAN BUKU</h2>
        <p class="report-period">Periode: {{ $from }} sampai {{ $to }}</p>
    </div>

    <table>
        <thead>
            <tr>
                <th style="width: 5%;">No</th>
                <th style="width: 20%;">Judul Buku</th>
                <th style="width: 15%;">Nama Peminjam</th>
                <th style="width: 10%;">Tanggal Pinjam</th>
                <th style="width: 10%;">Tanggal Dikembalikan</th>
                <th style="width: 10%;">Status Verifikasi</th>
                <th style="width: 10%;">Status Peminjaman</th>
                <th style="width: 8%;">Denda</th>
                <th style="width: 12%;">Keterangan Penolakan</th>
            </tr>
        </thead>
        <tbody>
            @foreach($loans as $index => $loan)
                <tr>
                    <td class="text-center">{{ $index + 1 }}</td>
                    <td>{{ $loan->book->judul ?? '-' }}</td>
                    <td>{{ $loan->user->name ?? '-' }}</td>
                    <td class="nowrap text-center">{{ $loan->loan_date ? \Carbon\Carbon::parse($loan->loan_date)->format('d M Y') : "-" }}</td>
                    <td class="nowrap text-center">{{ $loan->actual_return_date ? \Carbon\Carbon::parse($loan->actual_return_date)->format('d M Y') : "-" }}</td>
                    <td class="text-center">{{ $loan->status_verifikasi ?? "-" }}</td>
                    <td class="text-center">{{ $loan->status_peminjaman ?? "-" }}</td>
                    <td class="nowrap text-center">Rp {{ number_format($loan->denda, 0, ',', '.') }}</td>
                    <td>{{ $loan->keterangan_penolakan ?? "-" }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        <p>Dicetak pada: {{ now()->format('d F Y, H:i:s') }} WIB</p>
        <p>Perpustakaan SMP Muhammadiyah Karang Asem</p>
    </div>
</body>
</html>
