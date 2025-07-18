@extends('Dashboard.layouts.main')

@section('content')
<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{ route('books.index') }}">Manajemen Buku</a></li>
            <li class="breadcrumb-item active" aria-current="page">Detail Buku</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h6 class="card-title">Detail Buku</h6>
                        <div>
                            <a href="{{ route('books.edit', $book->id) }}" class="btn btn-primary btn-sm mr-2">
                                <i data-feather="edit"></i> Edit
                            </a>
                            <a href="{{ route('books.index') }}" class="btn btn-secondary btn-sm">
                                <i data-feather="arrow-left"></i> Kembali
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-primary text-white">
                                    Gambar Buku
                                </div>
                                <div class="card-body text-center">
                                    @if($book->gambar)
                                        <img src="{{ asset('storage/' . $book->gambar) }}" alt="{{ $book->judul }}"
                                            class="img-fluid rounded" style="max-height: 300px;">
                                    @else
                                        <div class="alert alert-light text-center p-5">
                                            <i data-feather="image" class="mb-2" style="width: 60px; height: 60px;"></i>
                                            <p>Tidak ada gambar tersedia</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <table class="table table-bordered">
                                <tr>
                                    <th style="width: 30%">Judul Buku</th>
                                    <td>{{ $book->judul }}</td>
                                </tr>
                                <tr>
                                    <th>Kode Buku</th>
                                    <td>{{ $book->kode_buku }}</td>
                                </tr>
                                <tr>
                                    <th>Pengarang</th>
                                    <td>{{ $book->pengarang }}</td>
                                </tr>
                                <tr>
                                    <th>Penerbit</th>
                                    <td>{{ $book->penerbit }}</td>
                                </tr>
                                <tr>
                                    <th>Tahun Terbit</th>
                                    <td>{{ $book->tahun_terbit }}</td>
                                </tr>
                                <tr>
                                    <th>Stok</th>
                                    <td>{{ $book->stok }}</td>
                                </tr>
                                {{-- <tr>
                                    <th>Kondisi</th>
                                    <td>{{ $book->kondisi }}</td>
                                </tr> --}}
                            </table>

                            @if($book->intisari)
                            <div class="card mt-3">
                                <div class="card-header bg-primary text-white">
                                    Intisari Buku
                                </div>
                                <div class="card-body">
                                    <p>{{ $book->intisari }}</p>
                                </div>
                            </div>
                            @endif

                            <div class="card mt-4">
                                <div class="card-header bg-primary text-white">
                                    Kategori
                                </div>
                                <div class="card-body">
                                    @if($book->categories->count() > 0)
                                        <ul class="list-group">
                                            @foreach($book->categories as $category)
                                                <li class="list-group-item">{{ $category->name }}</li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <p class="text-muted">Tidak ada kategori yang dipilih.</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
