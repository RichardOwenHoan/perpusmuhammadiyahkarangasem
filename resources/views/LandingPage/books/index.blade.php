@extends('LandingPage.layouts.main')

@section('title', 'Daftar Buku - Perpustakaan SMP Muhammadiyah Karangasem')

@section('css')
<style>
    .filter-section {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .book-card {
        height: 100%;
        transition: transform 0.3s, box-shadow 0.3s;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
        margin-bottom: 20px;
        border: none;
    }
    .book-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    .book-thumbnail-container {
        height: 250px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        padding: 10px;
    }
    .book-thumbnail {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }
    .book-info {
        padding: 15px;
    }
    .book-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
        line-height: 1.4;
        height: 45px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .book-author {
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
    }
    .book-publisher {
        font-size: 13px;
        color: #888;
        margin-bottom: 15px;
    }
    .book-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        background-color: #f9f9f9;
        border-top: 1px solid #eee;
    }
    .badge-stock {
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: 600;
        display: inline-block;
        text-align: center;
    }
    .badge-stock.available {
        background-color: #e8f5e9;
        color: #2e7d32;
        border: 1px solid #c8e6c9;
    }
    .badge-stock.unavailable {
        background-color: #ffebee;
        color: #c62828;
        border: 1px solid #ffcdd2;
    }
    .btn-detail {
        font-size: 12px;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: 600;
        transition: all 0.3s;
    }
    .btn-detail:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(13, 110, 253, 0.2);
    }
    .pagination {
        justify-content: center;
        margin-top: 30px;
    }
    .page-item.active .page-link {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    .page-link {
        color: #0d6efd;
    }
    .filter-title {
        font-weight: 600;
        margin-bottom: 10px;
        color: #444;
    }
    .filter-section select,
    .filter-section input {
        margin-bottom: 15px;
        border-radius: 6px;
    }
    .filter-section .form-control:focus {
        box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);
    }
    .empty-result {
        text-align: center;
        padding: 50px 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin-top: 20px;
        box-shadow: 0 0 15px rgba(0,0,0,0.05);
    }
    .empty-result i {
        font-size: 48px;
        color: #ccc;
        margin-bottom: 20px;
    }
    .btn-filter {
        font-weight: 600;
        letter-spacing: 0.5px;
        border-radius: 6px;
        transition: all 0.3s;
    }
    .btn-filter:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(13, 110, 253, 0.2);
    }
    .results-count {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
    }
    .book-link {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    .book-link:hover {
        text-decoration: none;
        color: inherit;
    }
    .button-one {
        transition: all 0.3s;
    }
    .button-one:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(13, 110, 253, 0.2);
    }
</style>
@endsection

@section('content')
<!-- page-banner-section -->
<section class="page-banner-section">
    <div class="container">
        <h1>Koleksi Buku</h1>
        <ul class="page-depth">
            <li><a href="{{ route('landing.home') }}">Beranda</a></li>
            <li><span>Daftar Buku</span></li>
        </ul>
    </div>
</section>
<!-- End page-banner section -->

<!-- Daftar Buku section -->
<section class="portfolio-section">
    <div class="container">
        <div class="row">
            <!-- Filter Section -->
            <div class="col-lg-3">
                <div class="filter-section">
                    <h3 class="mb-4">Filter Buku</h3>
                    <form action="{{ route('landing.books') }}" method="GET">
                        <div class="form-group">
                            <label class="filter-title">Pencarian</label>
                            <input type="text" name="search" class="form-control" placeholder="Cari judul, pengarang..." value="{{ request('search') }}">
                        </div>

                        <div class="form-group">
                            <label class="filter-title">Kategori</label>
                            <select name="category" class="form-control">
                                <option value="">Semua Kategori</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" {{ request('category') == $category->id ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="filter-title">Tahun Terbit</label>
                            <select name="tahun" class="form-control">
                                <option value="">Semua Tahun</option>
                                @foreach($years as $year)
                                    <option value="{{ $year }}" {{ request('tahun') == $year ? 'selected' : '' }}>
                                        {{ $year }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        {{--  <div class="form-group">
                            <label class="filter-title">Kondisi Buku</label>
                            <input type="text" name="kondisi" class="form-control" placeholder="Cari berdasarkan kondisi..." value="{{ request('kondisi') }}">
                        </div>  --}}

                        <div class="form-group">
                            <label class="filter-title">Urutkan Berdasarkan</label>
                            <select name="sortBy" class="form-control">
                                <option value="judul" {{ request('sortBy') == 'judul' ? 'selected' : '' }}>Judul</option>
                                <option value="tahun_terbit" {{ request('sortBy') == 'tahun_terbit' ? 'selected' : '' }}>Tahun Terbit</option>
                                <option value="created_at" {{ request('sortBy') == 'created_at' ? 'selected' : '' }}>Terbaru Ditambahkan</option>
                            </select>
                            <select name="sortDirection" class="form-control mt-2">
                                <option value="asc" {{ request('sortDirection') == 'asc' ? 'selected' : '' }}>Urutan Naik (A-Z)</option>
                                <option value="desc" {{ request('sortDirection') == 'desc' ? 'selected' : '' }}>Urutan Turun (Z-A)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="button-one w-100 btn-filter p-2" style="background-color: #52843e; color: #fff; border: none;">Filter Hasil</button>
                        </div>

                        @if(request()->anyFilled(['search', 'category', 'tahun', 'sortBy', 'sortDirection']))
                            <div class="form-group mt-2">
                                <a href="{{ route('landing.books') }}" class="btn btn-outline-secondary w-100" style="background-color: #b64545; color: #fff; border: none;">Reset Filter</a>
                            </div>
                        @endif
                    </form>
                </div>
            </div>

            <!-- Daftar Buku -->
            <div class="col-lg-9">
                <div class="row">
                    @if($books->total() > 0)
                        <div class="col-12">
                            <p class="results-count">Menampilkan {{ $books->firstItem() }} - {{ $books->lastItem() }} dari {{ $books->total() }} buku</p>
                        </div>

                        @foreach($books as $book)
                            <div class="col-lg-4 col-md-6">
                                <div class="book-card">
                                    <a href="{{ route('landing.books.show', $book->id) }}" class="book-link">
                                        <div class="book-thumbnail-container">
                                            @if($book->gambar)
                                                <img src="{{ asset('storage/' . $book->gambar) }}"
                                                     class="book-thumbnail" alt="{{ $book->judul }}">
                                            @else
                                                <img src="{{ asset('LP/default-book.png') }}"
                                                     class="book-thumbnail" alt="{{ $book->judul }}">
                                            @endif
                                        </div>
                                        <div class="book-info">
                                            <h5 class="book-title" title="{{ $book->judul }}">
                                                {{ $book->judul }}
                                            </h5>
                                            <p class="book-author">{{ $book->pengarang }}</p>
                                            <p class="book-publisher">{{ $book->penerbit }}, {{ $book->tahun_terbit }}</p>
                                        </div>
                                    </a>
                                    <div class="book-footer">
                                        <span class="badge badge-stock {{ $book->stok > 0 ? 'available' : 'unavailable' }}">
                                            {{ $book->stok > 0 ? 'Tersedia: '.$book->stok : 'Stok Habis' }}
                                        </span>
                                        <a href="{{ route('landing.books.show', $book->id) }}" class="btn btn-primary btn-detail">Detail</a>
                                    </div>
                                </div>
                            </div>
                        @endforeach

                        <div class="col-12">
                           {{ $books->withQueryString()->links('pagination::bootstrap-4') }}

                        </div>
                    @else
                        <div class="col-12">
                            <div class="empty-result">
                                <i class="material-icons">search_off</i>
                                <h3>Tidak Ada Buku Ditemukan</h3>
                                <p>Coba ubah filter pencarian Anda atau reset filter untuk melihat semua buku.</p>
                                <a href="{{ route('landing.books') }}" class="button-one mt-3">Lihat Semua Buku</a>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End daftar buku section -->
@endsection
