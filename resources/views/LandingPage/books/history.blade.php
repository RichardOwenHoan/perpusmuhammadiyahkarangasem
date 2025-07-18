@extends('LandingPage.layouts.main')

@section('title', 'Riwayat Peminjaman Buku - Perpustakaan SMP Muhammadiyah Karangasem')

@section('css')
<style>
    .history-container {
        padding: 40px 0;
    }
    .history-title {
        font-size: 28px;
        font-weight: 600;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
    }
    .empty-history {
        text-align: center;
        padding: 30px;
        background: #f8f9fa;
        border-radius: 10px;
        margin: 30px 0;
    }
    .empty-history i {
        font-size: 48px;
        color: #adb5bd;
        margin-bottom: 15px;
    }
    .empty-history p {
        font-size: 16px;
        color: #6c757d;
        margin-bottom: 20px;
    }
    .card-header-blue {
        background-color: #e7f5ff;
        border-bottom: none;
        padding: 15px 20px;
    }
    .card-header-title {
        font-size: 18px;
        font-weight: 600;
        color: #0d6efd;
        margin: 0;
    }
    .active-loan-card {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        border: none;
    }
    .active-loan-info {
        padding: 20px;
    }
    .active-loan-book {
        display: flex;
        margin-bottom: 20px;
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
    }
    .active-loan-book-image {
        width: 100px;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .active-loan-book-info {
        flex: 1;
    }
    .active-loan-book-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #333;
    }
    .active-loan-book-author {
        font-size: 14px;
        color: #6c757d;
        margin-bottom: 10px;
    }
    .active-loan-book-code {
        font-size: 13px;
        color: #6c757d;
        font-style: italic;
    }
    .active-loan-details {
        display: flex;
        flex-wrap: wrap;
    }
    .active-loan-detail {
        flex: 0 0 50%;
        margin-bottom: 15px;
    }
    .active-loan-detail-label {
        font-size: 13px;
        color: #6c757d;
        margin-bottom: 2px;
    }
    .active-loan-detail-value {
        font-size: 15px;
        font-weight: 500;
        color: #333;
    }
    .loan-status {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
    }
    .loan-status.dipinjam {
        background-color: rgba(0, 123, 255, 0.15);
        color: #0d6efd;
    }
    .loan-status.diperpanjang {
        background-color: rgba(108, 117, 125, 0.15);
        color: #6c757d;
    }
    .loan-status.dikembalikan {
        background-color: rgba(40, 167, 69, 0.15);
        color: #28a745;
    }
    .loan-status.pending {
        background-color: rgba(255, 193, 7, 0.15);
        color: #ffc107;
    }
    .loan-status.verified {
        background-color: rgba(23, 162, 184, 0.15);
        color: #17a2b8;
    }
    .loan-status.ditolak {
        background-color: rgba(220, 53, 69, 0.15);
        color: #dc3545;
    }
    .history-table-container {
        margin-top: 30px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    }
    .history-table {
        width: 100%;
        margin-bottom: 0;
    }
    .history-table th {
        background-color: #f8f9fa;
        font-weight: 600;
        font-size: 14px;
        color: #495057;
        padding: 12px 15px;
        border: none;
    }
    .history-table td {
        padding: 12px 15px;
        vertical-align: middle;
        border-top: 1px solid #f2f2f2;
        color: #333;
        font-size: 14px;
    }
    .history-table tr:hover {
        background-color: #f8f9fa;
    }
    .book-title-link {
        font-weight: 500;
        color: #0d6efd;
        text-decoration: none;
        transition: all 0.2s;
    }
    .book-title-link:hover {
        color: #0a58ca;
        text-decoration: underline;
    }
    .pagination-container {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
    .return-countdown {
        padding: 8px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        margin-top: 10px;
    }
    .return-countdown.normal {
        background-color: rgba(40, 167, 69, 0.1);
        color: #28a745;
    }
    .return-countdown.warning {
        background-color: rgba(255, 193, 7, 0.1);
        color: #ffc107;
    }
    .return-countdown.danger {
        background-color: rgba(220, 53, 69, 0.1);
        color: #dc3545;
    }
    .btn-detail {
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 500;
    }
</style>
@endsection

@section('content')
<section class="history-container">
    <div class="container">
        <h1 class="history-title">Riwayat Peminjaman Buku</h1>
        
        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        
        @if(session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ session('error') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        
        <!-- Peminjaman Aktif -->
        @if($activeLoan)
        <div class="card active-loan-card">
            <div class="card-header card-header-blue">
                <h5 class="card-header-title">Peminjaman Aktif</h5>
            </div>
            <div class="active-loan-info">
                <div class="active-loan-book">
                    @if($activeLoan->book->gambar)
                        <img src="{{ asset('storage/' . $activeLoan->book->gambar) }}" 
                             class="active-loan-book-image" alt="{{ $activeLoan->book->judul }}">
                    @else
                        <img src="{{ asset('LP/default-book.png') }}" 
                             class="active-loan-book-image" alt="{{ $activeLoan->book->judul }}">
                    @endif
                    <div class="active-loan-book-info">
                        <h3 class="active-loan-book-title">{{ $activeLoan->book->judul }}</h3>
                        <p class="active-loan-book-author">Pengarang: {{ $activeLoan->book->pengarang }}</p>
                        <p class="active-loan-book-code">Kode Buku: {{ $activeLoan->book->kode_buku }}</p>
                        <div class="mt-3">
                            <span class="loan-status {{ $activeLoan->status_peminjaman }}">
                                {{ ucfirst($activeLoan->status_peminjaman) }}
                            </span>
                            <span class="loan-status {{ $activeLoan->status_verifikasi }}">
                                @if($activeLoan->status_verifikasi == 'pending')
                                    Menunggu verifikasi
                                @elseif($activeLoan->status_verifikasi == 'verified')
                                    Terverifikasi
                                @elseif($activeLoan->status_verifikasi == 'ditolak')
                                    Ditolak
                                @endif
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="active-loan-details">
                    <div class="active-loan-detail">
                        <div class="active-loan-detail-label">Tanggal Peminjaman</div>
                        <div class="active-loan-detail-value">{{ $activeLoan->loan_date->format('d-m-Y') }}</div>
                    </div>
                    <div class="active-loan-detail">
                        <div class="active-loan-detail-label">Tanggal Pengembalian</div>
                        <div class="active-loan-detail-value">{{ $activeLoan->return_date->format('d-m-Y') }}</div>
                    </div>
                    <div class="active-loan-detail">
                        <div class="active-loan-detail-label">Status Verifikasi</div>
                        <div class="active-loan-detail-value">
                            @if($activeLoan->status_verifikasi == 'pending')
                                <span class="text-warning">Menunggu verifikasi</span>
                            @elseif($activeLoan->status_verifikasi == 'verified')
                                <span class="text-success">Terverifikasi</span>
                            @elseif($activeLoan->status_verifikasi == 'ditolak')
                                <span class="text-danger">Ditolak</span>
                            @endif
                        </div>
                    </div>
                    <div class="active-loan-detail">
                        <div class="active-loan-detail-label">Status Peminjaman</div>
                        <div class="active-loan-detail-value">
                            @if($activeLoan->status_peminjaman == 'dipinjam')
                                <span class="text-primary">Dipinjam</span>
                            @else
                                <span class="text-secondary">Diperpanjang</span>
                            @endif
                        </div>
                    </div>
                </div>
                
                @php
                    $today = \Carbon\Carbon::today();
                    $returnDate = \Carbon\Carbon::parse($activeLoan->return_date);
                    $daysRemaining = $today->diffInDays($returnDate, false);
                @endphp
                
                @if($activeLoan->status_verifikasi != 'ditolak')
                    @if($daysRemaining > 2)
                        <div class="return-countdown normal">
                            <i class="fa fa-calendar-check"></i> Sisa waktu pengembalian: {{ $daysRemaining }} hari lagi
                        </div>
                    @elseif($daysRemaining >= 0)
                        <div class="return-countdown warning">
                            <i class="fa fa-exclamation-triangle"></i> Perhatian! Sisa waktu pengembalian: {{ $daysRemaining }} hari lagi
                        </div>
                    @else
                        <div class="return-countdown danger">
                            <i class="fa fa-exclamation-circle"></i> Buku terlambat dikembalikan! Keterlambatan: {{ abs($daysRemaining) }} hari
                        </div>
                    @endif
                @else
                    <div class="alert alert-danger mt-3">
                        <h5 class="alert-heading"><i class="fa fa-times-circle"></i> Peminjaman Ditolak</h5>
                        @if($activeLoan->keterangan_penolakan)
                            <p class="mb-0">
                                <strong>Alasan:</strong> {{ $activeLoan->keterangan_penolakan }}
                            </p>
                        @endif
                    </div>
                @endif
                
                <div class="text-end mt-3">
                    <a href="{{ route('siswa.books.loan.show', $activeLoan->id) }}" class="btn btn-primary btn-sm">
                        <i class="fa fa-eye"></i> Lihat Detail
                    </a>
                </div>
            </div>
        </div>
        @endif
        
        <!-- Riwayat Peminjaman -->
        @if($loans->count() > 0)
            <div class="history-table-container">
                <div class="card-header card-header-blue">
                    <h5 class="card-header-title">Semua Peminjaman</h5>
                </div>
                <div class="table-responsive">
                    <table class="table history-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Judul Buku</th>
                                <th>Tgl Pinjam</th>
                                <th>Tgl Kembali</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($loans as $index => $loan)
                                <tr>
                                    <td>{{ $loans->firstItem() + $index }}</td>
                                    <td>
                                        <a href="{{ route('landing.books.show', $loan->book->id) }}" class="book-title-link">
                                            {{ Str::limit($loan->book->judul, 50) }}
                                        </a>
                                    </td>
                                    <td>{{ $loan->loan_date->format('d-m-Y') }}</td>
                                    <td>{{ $loan->return_date->format('d-m-Y') }}</td>
                                    <td>
                                        @if($loan->status_peminjaman == 'dipinjam')
                                            <span class="loan-status dipinjam">Dipinjam</span>
                                        @elseif($loan->status_peminjaman == 'diperpanjang')
                                            <span class="loan-status diperpanjang">Diperpanjang</span>
                                        @elseif($loan->status_peminjaman == 'dikembalikan')
                                            <span class="loan-status dikembalikan">Dikembalikan</span>
                                        @elseif($loan->status_verifikasi == 'pending')
                                            <span class="loan-status pending">Menunggu verifikasi</span>
                                        @elseif($loan->status_verifikasi == 'verified')
                                            <span class="loan-status verified">Terverifikasi</span>
                                        @elseif($loan->status_verifikasi == 'ditolak')
                                            <span class="loan-status ditolak">Ditolak</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('siswa.books.loan.show', $loan->id) }}" class="btn btn-outline-primary btn-sm btn-detail">
                                            <i class="fa fa-eye"></i> Detail
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="pagination-container">
                {{ $loans->links() }}
            </div>
        @else
            <div class="empty-history">
                <i class="fa fa-book fa-3x mb-3"></i>
                <p>Anda belum memiliki riwayat peminjaman buku.</p>
                <a href="{{ route('landing.books') }}" class="btn btn-primary">
                    <i class="fa fa-search"></i> Cari Buku
                </a>
            </div>
        @endif
    </div>
</section>
@endsection 