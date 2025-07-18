@extends('LandingPage.layouts.main')

@section('title', 'Detail Peminjaman - ' . $loan->book->judul)

@section('css')
<style>
    .loan-detail-container {
        padding: 40px 0;
    }
    .loan-detail-title {
        font-size: 28px;
        font-weight: 600;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
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
    .loan-detail-card {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border: none;
        margin-bottom: 30px;
    }
    .loan-info {
        padding: 20px;
    }
    .loan-book {
        display: flex;
        margin-bottom: 20px;
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
    }
    .loan-book-image {
        width: 100px;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .loan-book-info {
        flex: 1;
    }
    .loan-book-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #333;
    }
    .loan-book-author {
        font-size: 14px;
        color: #6c757d;
        margin-bottom: 10px;
    }
    .loan-book-code {
        font-size: 13px;
        color: #6c757d;
        font-style: italic;
    }
    .loan-details {
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }
    .loan-detail-row {
        display: flex;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
    }
    .loan-detail-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .loan-detail-label {
        flex: 0 0 180px;
        font-weight: 600;
        color: #555;
    }
    .loan-detail-value {
        flex: 1;
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
    .loan-status.belum_dibayar {
        background-color: rgba(220, 53, 69, 0.15);
        color: #dc3545;
    }
    .loan-status.dibayar {
        background-color: rgba(40, 167, 69, 0.15);
        color: #28a745;
    }
    .loan-status.tidak_ada {
        background-color: rgba(108, 117, 125, 0.15);
        color: #6c757d;
    }
    .return-countdown {
        padding: 12px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        margin: 15px 0;
        text-align: center;
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
    .page-breadcrumb {
        padding: 0;
        margin-bottom: 20px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .page-breadcrumb li {
        font-size: 14px;
        padding-right: 15px;
        position: relative;
    }
    .page-breadcrumb li:not(:last-child):after {
        content: '/';
        position: absolute;
        right: 5px;
        top: 0;
        color: #999;
    }
    .page-breadcrumb a {
        color: #666;
    }
    .page-breadcrumb a:hover {
        color: #0d6efd;
    }
    .fine-info {
        padding: 15px;
        background-color: rgba(220, 53, 69, 0.1);
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 4px solid #dc3545;
    }
    .fine-info-title {
        font-size: 16px;
        font-weight: 600;
        color: #dc3545;
        margin-bottom: 10px;
    }
    .fine-info-text {
        color: #333;
        margin-bottom: 0;
    }
    .rejection-info {
        padding: 15px;
        background-color: rgba(220, 53, 69, 0.1);
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 4px solid #dc3545;
    }
    .rejection-info-title {
        font-size: 16px;
        font-weight: 600;
        color: #dc3545;
        margin-bottom: 10px;
    }
    .rejection-info-text {
        color: #333;
        margin-bottom: 0;
    }
</style>
@endsection

@section('content')
<section class="loan-detail-container">
    <div class="container">
        <ul class="page-breadcrumb">
            <li><a href="{{ route('landing.home') }}">Beranda</a></li>
            <li><a href="{{ route('siswa.books.loans.history') }}">Riwayat Peminjaman</a></li>
            <li>Detail Peminjaman</li>
        </ul>
        
        <h1 class="loan-detail-title">Detail Peminjaman Buku</h1>
        
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="loan-detail-card">
                    <div class="card-header card-header-blue">
                        <h5 class="card-header-title">Informasi Peminjaman</h5>
                    </div>
                    <div class="loan-info">
                        <div class="loan-book">
                            @if($loan->book->gambar)
                                <img src="{{ asset('storage/' . $loan->book->gambar) }}" 
                                     class="loan-book-image" alt="{{ $loan->book->judul }}">
                            @else
                                <img src="{{ asset('LP/default-book.png') }}" 
                                     class="loan-book-image" alt="{{ $loan->book->judul }}">
                            @endif
                            <div class="loan-book-info">
                                <h3 class="loan-book-title">{{ $loan->book->judul }}</h3>
                                <p class="loan-book-author">Pengarang: {{ $loan->book->pengarang }}</p>
                                <p class="loan-book-code">Kode Buku: {{ $loan->book->kode_buku }}</p>
                                <div class="mt-3">
                                    <span class="loan-status {{ $loan->status_peminjaman }}">
                                        {{ ucfirst($loan->status_peminjaman) }}
                                    </span>
                                    <span class="loan-status {{ $loan->status_verifikasi }}">
                                        @if($loan->status_verifikasi == 'pending')
                                            Menunggu verifikasi
                                        @elseif($loan->status_verifikasi == 'verified')
                                            Terverifikasi
                                        @elseif($loan->status_verifikasi == 'ditolak')
                                            Ditolak
                                        @endif
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        @if($loan->status_peminjaman != 'dikembalikan')
                            @php
                                $today = \Carbon\Carbon::today();
                                $returnDate = \Carbon\Carbon::parse($loan->return_date);
                                $daysRemaining = $today->diffInDays($returnDate, false);
                            @endphp
                            
                            @if($loan->status_verifikasi != 'ditolak')
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
                                    <div class="alert alert-danger mt-3">
                                        <h5 class="alert-heading"><i class="fa fa-money-bill"></i> Denda Keterlambatan</h5>
                                        <p class="mb-0">
                                            Anda telah terlambat mengembalikan buku selama <strong>{{ abs($daysRemaining) }} hari</strong>. 
                                            <br>Denda yang harus dibayar: <strong>Rp {{ number_format(abs($daysRemaining) * 1000, 0, ',', '.') }}</strong>
                                            <br><small>(Rp 1.000 per hari keterlambatan)</small>
                                        </p>
                                    </div>
                                @endif
                            @endif
                        @endif
                        
                        @if($loan->status_verifikasi == 'ditolak' && $loan->keterangan_penolakan)
                        <div class="rejection-info">
                            <h5 class="rejection-info-title"><i class="fa fa-times-circle"></i> Peminjaman Ditolak</h5>
                            <p class="rejection-info-text">
                                <strong>Alasan Penolakan:</strong><br>
                                {{ $loan->keterangan_penolakan }}
                            </p>
                        </div>
                        @endif
                        
                        <div class="loan-details">
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">ID Peminjaman</div>
                                <div class="loan-detail-value">{{ $loan->id }}</div>
                            </div>
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Tanggal Peminjaman</div>
                                <div class="loan-detail-value">{{ $loan->loan_date->format('d-m-Y') }}</div>
                            </div>
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Tanggal Pengembalian</div>
                                <div class="loan-detail-value">{{ $loan->return_date->format('d-m-Y') }}</div>
                            </div>
                            @if($loan->actual_return_date)
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Tanggal Dikembalikan</div>
                                <div class="loan-detail-value">{{ $loan->actual_return_date->format('d-m-Y') }}</div>
                            </div>
                            @endif
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Status Verifikasi</div>
                                <div class="loan-detail-value">
                                    @if($loan->status_verifikasi == 'pending')
                                        <span class="loan-status pending">Menunggu verifikasi</span>
                                    @elseif($loan->status_verifikasi == 'verified')
                                        <span class="loan-status verified">Terverifikasi</span>
                                    @elseif($loan->status_verifikasi == 'ditolak')
                                        <span class="loan-status ditolak">Ditolak</span>
                                    @endif
                                </div>
                            </div>
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Status Peminjaman</div>
                                <div class="loan-detail-value">
                                    @if($loan->status_peminjaman == 'dipinjam')
                                        <span class="loan-status dipinjam">Dipinjam</span>
                                    @elseif($loan->status_peminjaman == 'diperpanjang')
                                        <span class="loan-status diperpanjang">Diperpanjang</span>
                                    @elseif($loan->status_peminjaman == 'dikembalikan')
                                        <span class="loan-status dikembalikan">Dikembalikan</span>
                                    @endif
                                </div>
                            </div>
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Status Denda</div>
                                <div class="loan-detail-value">
                                    @if($loan->status_denda == 'tidak_ada')
                                        <span class="loan-status tidak_ada">Tidak ada denda</span>
                                    @elseif($loan->status_denda == 'belum_dibayar')
                                        <span class="loan-status belum_dibayar">Belum dibayar</span>
                                    @elseif($loan->status_denda == 'dibayar')
                                        <span class="loan-status dibayar">Sudah dibayar</span>
                                    @endif
                                </div>
                            </div>
                            @if($loan->denda > 0)
                            <div class="loan-detail-row">
                                <div class="loan-detail-label">Jumlah Denda</div>
                                <div class="loan-detail-value">Rp {{ number_format($loan->denda, 0, ',', '.') }}</div>
                            </div>
                            @endif
                        </div>
                        
                        @if($loan->denda > 0 && $loan->status_denda == 'belum_dibayar')
                        <div class="fine-info">
                            <h5 class="fine-info-title"><i class="fa fa-exclamation-triangle"></i> Informasi Denda</h5>
                            @php
                                $today = \Carbon\Carbon::today();
                                $returnDate = \Carbon\Carbon::parse($loan->return_date);
                                $lateDays = abs($today->diffInDays($returnDate, false));
                            @endphp
                            <p class="fine-info-text">
                                Anda memiliki denda sebesar <strong>Rp {{ number_format($loan->denda, 0, ',', '.') }}</strong> yang belum dibayar.
                                <br>
                                <span class="mt-2 d-block">
                                    <strong>Rincian Denda:</strong>
                                    <br>Keterlambatan: {{ $lateDays }} hari
                                    <br>Tarif denda: Rp 1.000 per hari
                                    <br>Total: {{ $lateDays }} × Rp 1.000 = Rp {{ number_format($loan->denda, 0, ',', '.') }}
                                </span>
                                <br>
                                Silakan bayar denda tersebut kepada petugas perpustakaan.
                            </p>
                        </div>
                        @endif
                        
                        <div class="d-flex justify-content-between mt-4">
                            <a href="{{ route('siswa.books.loans.history') }}" class="btn btn-secondary">
                                <i class="fa fa-arrow-left"></i> Kembali ke Riwayat
                            </a>
                            <a href="{{ route('landing.books.show', $loan->book->id) }}" class="btn btn-primary">
                                <i class="fa fa-book"></i> Lihat Detail Buku
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection 