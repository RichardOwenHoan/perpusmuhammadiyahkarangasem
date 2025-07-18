@extends('Dashboard.layouts.main')

@section('content')
    <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Detail Peminjaman Buku</h1>
            
            <a href="{{ route('dashboard.loans.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm">
                <i class="fas fa-arrow-left fa-sm text-white-50"></i> Kembali
                
            </a>

        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Informasi Peminjaman</h6>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th style="width: 30%">ID Peminjaman</th>
                                <td>{{ $loan->id }}</td>
                            </tr>
                            <tr>
                                <th>Tanggal Pinjam</th>
                                <td>{{ $loan->loan_date->format('d/m/Y') }}</td>
                            </tr>
                            <tr>
                                <th>Tanggal Kembali</th>
                                <td>{{ $loan->return_date->format('d/m/Y') }}</td>
                            </tr>
                            <tr>
                                <th>Tanggal Pengembalian</th>
                                <td>{{ $loan->actual_return_date ? $loan->actual_return_date->format('d/m/Y') : 'Belum dikembalikan' }}</td>
                            </tr>
                            <tr>
                                <th>Status Verifikasi</th>
                                <td>
                                    @if ($loan->status_verifikasi == 'pending')
                                        <span class="badge badge-warning">Menunggu</span>
                                    @elseif ($loan->status_verifikasi == 'verified')
                                        <span class="badge badge-success">Terverifikasi</span>
                                    @elseif ($loan->status_verifikasi == 'ditolak')
                                        <span class="badge badge-danger">Ditolak</span>
                                    @endif
                                </td>
                            </tr>
                            @if ($loan->status_verifikasi == 'ditolak' && $loan->keterangan_penolakan)
                                <tr>
                                    <th>Alasan Penolakan</th>
                                    <td>{{ $loan->keterangan_penolakan }}</td>
                                </tr>
                            @endif
                    
                            @if ($loan->denda > 0)
                                <tr>
                                    <th>Denda</th>
                                    <td>Rp {{ number_format($loan->denda, 0, ',', '.') }}</td>
                                </tr>
                                <tr>
                                    <th>Status Denda</th>
                                    <td>
                                        @if ($loan->status_denda == 'belum_dibayar')
                                            <span class="badge badge-danger">Belum Dibayar</span>
                                        @elseif ($loan->status_denda == 'dibayar')
                                            <span class="badge badge-success">Sudah Dibayar</span>
                                        @else
                                            <span class="badge badge-secondary">Tidak Ada</span>
                                        @endif
                                    </td>
                                </tr>
                            @endif
                            <tr>
                                <th>Catatan</th>
                                <td>{{ $loan->catatan ?: 'Tidak ada catatan' }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Informasi Buku</h6>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th style="width: 30%">Judul Buku</th>
                                <td>{{ $loan->book->judul }}</td>
                            </tr>
                            <tr>
                                <th>Kode Buku</th>
                                <td>{{ $loan->book->kode_buku }}</td>
                            </tr>
                            <tr>
                                <th>Pengarang</th>
                                <td>{{ $loan->book->pengarang }}</td>
                            </tr>
                            <tr>
                                <th>Penerbit</th>
                                <td>{{ $loan->book->penerbit }}</td>
                            </tr>
                            <tr>
                                <th>Tahun Terbit</th>
                                <td>{{ $loan->book->tahun_terbit }}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Informasi Peminjam</h6>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th style="width: 30%">Nama</th>
                                <td>{{ $loan->user->name }}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{{ $loan->user->email }}</td>
                            </tr>
                            <tr>
                                <th>NIS</th>
                                <td>{{ $loan->user->nis ?: 'Tidak ada' }}</td>
                            </tr>
                            <tr>
                                <th>Kelas</th>
                                <td>{{ $loan->user->kelas ?: 'Tidak ada' }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Riwayat Pengiriman Reminder -->
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex justify-content-between align-items-center">
                        <h6 class="m-0 font-weight-bold text-primary">Riwayat Pengiriman Reminder</h6>
                        
                        @if (in_array($loan->status_peminjaman, ['dipinjam', 'diperpanjang']))
                        <form action="{{ route('dashboard.returns.remind', $loan->id) }}" method="POST" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-warning" onclick="return confirm('Kirim reminder pengembalian buku ke siswa ini?')">
                                <i class="fas fa-envelope"></i> Kirim Reminder Sekarang
                            </button>
                        </form>
                        @endif
                    </div>
                    <div class="card-body">
                        @if ($loan->reminder_logs)
                            @php
                                $reminderLogs = json_decode($loan->reminder_logs, true);
                            @endphp
                            @if (count($reminderLogs) > 0)
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Waktu Pengiriman</th>
                                                <th>Tipe Reminder</th>
                                                <th>Status</th>
                                                <th>Dikirim Oleh</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($reminderLogs as $index => $log)
                                                <tr>
                                                    <td>{{ $index + 1 }}</td>
                                                    <td>{{ \Carbon\Carbon::parse($log['sent_at'])->format('d/m/Y H:i') }}</td>
                                                    <td>
                                                        @if ($log['type'] == 'before_due')
                                                            <span class="badge badge-info">Sebelum Jatuh Tempo</span>
                                                        @elseif ($log['type'] == 'on_due')
                                                            <span class="badge badge-warning">Pada Hari Jatuh Tempo</span>
                                                        @elseif ($log['type'] == 'after_due')
                                                            <span class="badge badge-danger">Setelah Jatuh Tempo</span>
                                                        @endif
                                                    </td>
                                                    <td>
                                                        @if ($log['sent_manually'])
                                                            <span class="badge badge-success">Manual</span>
                                                        @else
                                                            <span class="badge badge-secondary">Otomatis</span>
                                                        @endif
                                                    </td>
                                                    <td>{{ $log['sent_by'] }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            @else
                                <p class="text-center">Belum ada riwayat pengiriman reminder.</p>
                            @endif
                        @else
                            <p class="text-center">Belum ada riwayat pengiriman reminder.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>

    </div>

  
@endsection 