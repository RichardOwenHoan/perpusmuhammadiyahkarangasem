<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Daftar Peminjaman</title>
    <style>
        body { font-family: sans-serif; font-size: 11px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #000; padding: 4px; text-align: left; vertical-align: top; }
        th { background-color: #f2f2f2; }
        .nowrap { white-space: nowrap; }
    </style>
</head>
<body>
    <h2>Daftar Peminjaman</h2>
    <p>Periode: {{ $from }} sampai {{ $to }}</p>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Judul Buku</th>
                <th>Nama Peminjam</th>
                <th>Tanggal Pinjam</th>
                {{-- <th>Tanggal Kembali</th> --}}
                <th>Tanggal Dikembalikan</th>
                <th>Status Verifikasi</th>
                <th>Status Peminjaman</th>
                {{-- <th>Denda</th>
                <th>Perlu Perhatian</th>
                <th>Log Reminder</th>
                <th>Status Denda</th> --}}
                <th>Keterangan Penolakan</th>
                {{-- <th>Created At</th>
                <th>Updated At</th> --}}
                <th>Catatan</th>
            </tr>
        </thead>
        <tbody>
            @foreach($loans as $index => $loan)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $loan->book->judul ?? '-' }}</td>
                    <td>{{ $loan->user->name ?? '-' }}</td>
                    <td class="nowrap">{{ $loan->loan_date ? \Carbon\Carbon::parse($loan->loan_date)->format('d M Y') : "-" }}</td>
                    {{-- <td class="nowrap">{{ $loan->return_date }}</td> --}}
                    <td class="nowrap">{{ $loan->actual_return_date ? \Carbon\Carbon::parse($loan->actual_return_date)->format('d M Y') : "-" }}</td>
                    <td>{{ $loan->status_verifikasi ?? "-" }}</td>
                    <td>{{ $loan->status_peminjaman ?? "-" }}</td>
                    {{-- <td>{{ number_format($loan->denda, 2) }}</td>
                    <td>{{ $loan->need_attention ? 'Ya' : 'Tidak' }}</td>
                    <td>{{ $loan->reminder_logs }}</td>
                    <td>{{ $loan->status_denda }}</td> --}}
                    <td>{{ $loan->keterangan_penolakan ?? "-" }}</td>
                    {{-- <td class="nowrap">{{ $loan->created_at }}</td>
                    <td class="nowrap">{{ $loan->updated_at }}</td> --}}
                    <td>{{ $loan->catatan }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
