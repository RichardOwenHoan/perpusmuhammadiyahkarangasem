@extends('LandingPage.layouts.main')

@section('title', $book->judul . ' - Perpustakaan SMP Muhammadiyah Karang Asem')

@section('css')
<style>
    .book-container {
        padding: 30px 0;
    }
    .book-title {
        font-size: 28px;
        font-weight: 600;
        color: #333;
        margin-bottom: 20px;
    }
    .book-image-container {
        text-align: center;
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }
    .book-image {
        max-height: 400px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
    }
    .availability-badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 30px;
        font-weight: 600;
        text-align: center;
        margin: 15px auto;
    }
    .availability-badge.available {
        background-color: #e8f5e9;
        color: #2e7d32;
        border: 1px solid #c8e6c9;
    }
    .availability-badge.unavailable {
        background-color: #ffebee;
        color: #c62828;
        border: 1px solid #ffcdd2;
    }
    .book-action {
        margin-top: 15px;
        text-align: center;
    }
    .book-details {
        background: #f9f9f9;
        border-radius: 8px;
        padding: 25px;
        margin-bottom: 25px;
    }
    .book-detail-row {
        display: flex;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
    }
    .book-detail-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .book-detail-label {
        flex: 0 0 120px;
        font-weight: 600;
        color: #555;
    }
    .book-detail-value {
        flex: 1;
    }
    .book-category {
        display: inline-block;
        padding: 4px 12px;
        background: #e9ecef;
        border-radius: 20px;
        margin-right: 5px;
        margin-bottom: 5px;
        font-size: 0.85rem;
    }
    .book-description {
        margin-top: 30px;
    }
    .book-description h3 {
        font-size: 20px;
        margin-bottom: 15px;
        position: relative;
        padding-bottom: 10px;
    }
    .book-description h3:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 2px;
        background: #0d6efd;
    }
    .related-books {
        margin-top: 50px;
        padding-top: 40px;
        border-top: 1px solid #eee;
    }
    .related-books h3 {
        font-size: 24px;
        margin-bottom: 25px;
        position: relative;
        padding-bottom: 15px;
        font-weight: 600;
        text-align: center;
    }
    .related-books h3:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #0d6efd;
    }
    .related-book-card {
        height: 100%;
        transition: all 0.3s ease-in-out;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border: none;
        position: relative;
    }
    .related-book-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 25px rgba(0,0,0,0.15);
    }
    .related-book-image-container {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    .related-book-image {
        height: 200px;
        object-fit: cover;
        width: 100%;
        transition: transform 0.5s ease;
    }
    .related-book-card:hover .related-book-image {
        transform: scale(1.05);
    }
    .related-book-availability {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        z-index: 2;
    }
    .related-book-availability.available {
        background-color: rgba(46, 125, 50, 0.85);
        color: white;
    }
    .related-book-availability.unavailable {
        background-color: rgba(198, 40, 40, 0.85);
        color: white;
    }
    .related-book-card .card-body {
        padding: 15px;
    }
    .related-book-title {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 8px;
        height: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .related-book-author {
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 12px;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .related-book-btn {
        width: 100%;
        border-radius: 25px;
        font-size: 0.85rem;
        font-weight: 600;
        padding: 8px 15px;
        transition: all 0.3s;
        text-transform: uppercase;
    }
    .related-book-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(13, 110, 253, 0.25);
    }
    .related-books-container {
        padding-top: 10px;
    }
    .no-related-books {
        text-align: center;
        padding: 30px;
        background: #f8f9fa;
        border-radius: 10px;
        color: #6c757d;
        font-style: italic;
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
    .btn-pinjam {
        padding: 10px 30px;
        border-radius: 30px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s;
    }
    .btn-pinjam:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(13, 110, 253, 0.2);
    }
    .btn-pinjam:disabled {
        background-color: #e9ecef;
        color: #868e96;
        cursor: not-allowed;
        border: none;
    }
    .btn-pinjam:disabled:hover {
        transform: none;
        box-shadow: none;
    }
    .alert-info-loan {
        margin-top: 15px;
        border-radius: 10px;
        font-size: 0.9rem;
    }
</style>
@endsection

@section('content')
{{-- <!-- page-banner-section -->
<section class="page-banner-section">
    <div class="container">
        <h1>{{ $book->judul }}</h1>
        <ul class="page-depth">
            <li><a href="{{ route('landing.home') }}">Beranda</a></li>
            <li><a href="{{ route('landing.books') }}">Daftar Buku</a></li>
            <li><span>Detail Buku</span></li>
        </ul>
    </div>
</section>
<!-- End page-banner section --> --}}

<!-- Detail Buku section -->
<section class="book-container">
    <div class="container">
        <ul class="page-breadcrumb">
            <li><a href="{{ route('landing.home') }}">Beranda</a></li>
            <li><a href="{{ route('landing.books') }}">Daftar Buku</a></li>
            <li>{{ $book->judul }}</li>
        </ul>

        <!-- Flash Messages -->
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

        <h1 class="book-title">{{ $book->judul }}</h1>

        <div class="row">
            <div class="col-md-4">
                <div class="book-image-container">
                    @if($book->gambar)
                        <img src="{{ asset('storage/' . $book->gambar) }}"
                            alt="{{ $book->judul }}" class="book-image">
                    @else
                        <img src="{{ asset('LP/default-book.png') }}"
                            alt="{{ $book->judul }}" class="book-image">
                    @endif
                </div>

                @if ($book->archived)
                    <div class="alert alert-warning" role="alert">
                        <i class="fa fa-exclamation-triangle"></i> Buku ini telah dihapus dan tidak tersedia untuk peminjaman.
                    </div>
                @else
                <div class="text-center">
                    @if($book->stok > 0)
                        <div class="availability-badge available">
                            <i class="fa fa-check-circle"></i> Tersedia: {{ $book->stok }} Buku
                        </div>
                    @else
                        <div class="availability-badge unavailable">
                            <i class="fa fa-times-circle"></i> Stok Tidak Tersedia
                        </div>
                    @endif
                </div>

                <div class="book-action">
                    @auth
                        @if(auth()->user()->isSiswa())
                            @php
                                $existingLoan = App\Models\BookLoan::where('user_id', auth()->id())
                                    ->whereIn('status_peminjaman', ['dipinjam', 'diperpanjang'])
                                    ->first();
                            @endphp

                            @if($existingLoan)
                                <button class="button-one btn-pinjam" disabled>Sudah Meminjam Buku Lain</button>
                                <div class="alert alert-info alert-info-loan" role="alert">
                                    <i class="fa fa-info-circle"></i> Anda sudah meminjam buku: <strong>{{ $existingLoan->book->judul }}</strong>.
                                    Kembalikan buku tersebut terlebih dahulu untuk dapat meminjam buku lain.
                                </div>
                            @elseif($book->stok > 0)
                                <a href="{{ route('siswa.books.create', $book->id) }}" class="button-one btn-pinjam">Pinjam Buku</a>
                            @else
                                <button class="button-one btn-pinjam" disabled>Tidak Tersedia</button>
                            @endif
                        @else
                            {{-- Admin tidak perlu tombol pinjam --}}
                            <div class="alert alert-info alert-info-loan" role="alert">
                                <i class="fa fa-info-circle"></i> Fitur peminjaman hanya tersedia untuk akun siswa.
                            </div>
                        @endif
                    @else
                        <a href="{{ route('login') }}" class="button-one btn-pinjam">Login untuk Pinjam</a>
                    @endauth
                </div>
                @endif
            </div>

            <div class="col-md-8">
                <div class="book-details">
                    <div class="book-detail-row">
                        <div class="book-detail-label">Pengarang</div>
                        <div class="book-detail-value">{{ $book->pengarang }}</div>
                    </div>
                    <div class="book-detail-row">
                        <div class="book-detail-label">Kode Buku</div>
                        <div class="book-detail-value">{{ $book->kode_buku }}</div>
                    </div>
                    <div class="book-detail-row">
                        <div class="book-detail-label">Penerbit</div>
                        <div class="book-detail-value">{{ $book->penerbit }}</div>
                    </div>
                    <div class="book-detail-row">
                        <div class="book-detail-label">Tahun Terbit</div>
                        <div class="book-detail-value">{{ $book->tahun_terbit }}</div>
                    </div>
                    {{-- <div class="book-detail-row">
                        <div class="book-detail-label">Kondisi Buku</div>
                        <div class="book-detail-value">{{ $book->kondisi }}</div>
                    </div> --}}
                    <div class="book-detail-row">
                        <div class="book-detail-label">Kategori</div>
                        <div class="book-detail-value">
                            @forelse($book->categories as $category)
                                <span class="book-category">{{ $category->name }}</span>
                            @empty
                                <span>-</span>
                            @endforelse
                        </div>
                    </div>
                </div>

                @if($book->intisari)
                    <div class="book-description">
                        <h3>Deskripsi</h3>
                        <div class="text-block">
                            <p>{{ $book->intisari }}</p>
                        </div>
                    </div>
                @endif
            </div>
        </div>

        <!-- Related Books -->
        <div class="related-books">
            <h3>Buku Terkait</h3>

            @if($relatedBooks->count() > 0)
                <div class="related-books-container">
                    <div class="row">
                        @foreach($relatedBooks as $relatedBook)
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="card related-book-card">
                                    <div class="related-book-image-container">
                                        @if($relatedBook->stok > 0)
                                            <div class="related-book-availability available">
                                                <i class="fa fa-check-circle"></i> Tersedia
                                            </div>
                                        @else
                                            <div class="related-book-availability unavailable">
                                                <i class="fa fa-times-circle"></i> Habis
                                            </div>
                                        @endif

                                        @if($relatedBook->gambar)
                                            <img src="{{ asset('storage/' . $relatedBook->gambar) }}"
                                                class="related-book-image" alt="{{ $relatedBook->judul }}">
                                        @else
                                            <img src="{{ asset('LP/default-book.png') }}"
                                                class="related-book-image" alt="{{ $relatedBook->judul }}">
                                        @endif
                                    </div>
                                    <div class="card-body">
                                        <h5 class="related-book-title">{{ Str::limit($relatedBook->judul, 40) }}</h5>
                                        <p class="related-book-author">
                                            <i class="fa fa-user-edit"></i> {{ Str::limit($relatedBook->pengarang, 25) }}
                                        </p>
                                        <a href="{{ route('landing.books.show', $relatedBook->id) }}"
                                           class="btn btn-primary related-book-btn">
                                            <i class="fa fa-eye"></i> Lihat Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @else
                <div class="no-related-books">
                    <i class="fa fa-info-circle fa-2x mb-3"></i>
                    <p>Tidak ada buku terkait yang tersedia saat ini.</p>
                </div>
            @endif
        </div>
    </div>
</section>
<!-- End detail buku section -->
@endsection
