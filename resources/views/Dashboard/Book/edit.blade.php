@extends('Dashboard.layouts.main')

@section('content')
<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{ route('books.index') }}">Manajemen Buku</a></li>
            <li class="breadcrumb-item active" aria-current="page">Edit Buku</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Form Edit Buku</h6>

                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif

                    <form action="{{ route('books.update', $book->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="judul">Judul Buku</label>
                                    <input type="text" class="form-control" id="judul" name="judul" value="{{ old('judul', $book->judul) }}" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="kode_buku">Kode Buku</label>
                                    <input type="text" class="form-control" id="kode_buku" name="kode_buku" value="{{ old('kode_buku', $book->kode_buku) }}" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="pengarang">Pengarang</label>
                                    <input type="text" class="form-control" id="pengarang" name="pengarang" value="{{ old('pengarang', $book->pengarang) }}" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="penerbit">Penerbit</label>
                                    <input type="text" class="form-control" id="penerbit" name="penerbit" value="{{ old('penerbit', $book->penerbit) }}" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="tahun_terbit">Tahun Terbit</label>
                                    <input type="number" class="form-control" id="tahun_terbit" name="tahun_terbit" min="1900" max="{{ date('Y') + 1 }}" value="{{ old('tahun_terbit', $book->tahun_terbit) }}" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="stok">Stok Buku</label>
                                    <input type="number" class="form-control" id="stok" name="stok" min="0" value="{{ old('stok', $book->stok) }}" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="intisari">Intisari Buku</label>
                            <textarea class="form-control" id="intisari" name="intisari" rows="4">{{ old('intisari', $book->intisari) }}</textarea>
                            <small class="form-text text-muted">Ringkasan singkat tentang isi buku (opsional)</small>
                        </div>

                        {{-- <div class="form-group">
                            <label for="kondisi">Kondisi Buku</label>
                            <input type="text" class="form-control" id="kondisi" name="kondisi" value="{{ old('kondisi', $book->kondisi) }}" required placeholder="Contoh: Baik, Rusak Ringan, Rusak Berat, dll.">
                            <small class="form-text text-muted">Masukkan kondisi buku secara bebas (contoh: Baik, Rusak Ringan, Rusak Berat, dll.)</small>
                        </div> --}}

                        <div class="form-group">
                            <label for="gambar">Gambar Buku</label>
                            @if($book->gambar)
                                <div class="mb-3">
                                    <img src="{{ asset('storage/' . $book->gambar) }}" alt="{{ $book->judul }}" style="max-width: 200px; max-height: 200px;" class="img-thumbnail">
                                </div>
                            @endif
                            <input type="file" class="form-control" id="gambar" name="gambar" accept="image/*">
                            <small class="form-text text-muted">Upload gambar baru untuk mengganti gambar yang ada (kosongkan jika tidak ingin mengubah).</small>
                        </div>

                        <div class="form-group">
                            <label for="category_ids">Kategori</label>
                            <select class="js-example-basic-multiple w-100" id="category_ids" name="category_ids[]" multiple="multiple" data-width="100%" required>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ (old('category_ids') && in_array($category->id, old('category_ids'))) ||
                                           (isset($selectedCategories) && in_array($category->id, $selectedCategories)) ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group mt-4">
                            <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                            <a href="{{ route('books.index') }}" class="btn btn-secondary">Batal</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('plugin-scripts')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
@endpush

@push('custom-scripts')
<script>
    $(function() {
        $('.js-example-basic-multiple').select2({
            placeholder: 'Pilih kategori',
            allowClear: true
        });
    });
</script>
@endpush
