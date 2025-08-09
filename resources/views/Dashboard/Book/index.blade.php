@extends('Dashboard.layouts.main')

@section('content')

<style>
    .link-icon {
        width: 15px;
        height: 15px;
    }
</style>

<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Manajemen Buku</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Manajemen Data Buku</h6>
                    <div class="d-flex justify-content-end mb-3">
                        <a href="{{ route('books.create') }}" class="btn btn-primary ml-auto">
                            <i data-feather="plus"></i> Tambah Buku
                        </a>
                    </div>

                    @if(session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                    @endif

                    <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Gambar</th>
                                    <th>Judul</th>
                                    <th>Kode Buku</th>
                                    <th>Pengarang</th>
                                    <th>Penerbit</th>
                                    <th>Tahun Terbit</th>
                                    <th>Stok</th>
                                    {{--  <th>Kondisi</th>  --}}
                                    <th>Kategori</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($books as $book)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>
                                        @if($book->gambar)
                                            <img src="{{ asset('storage/' . $book->gambar) }}" alt="{{ $book->judul }}"
                                                style="width: 60px; height: 60px; object-fit: cover;" class="img-thumbnail">
                                        @else
                                            <span class="badge bg-light text-dark">Tidak ada gambar</span>
                                        @endif
                                    </td>
                                    <td>{{ $book->judul }}</td>
                                    <td>{{ $book->kode_buku }}</td>
                                    <td>{{ $book->pengarang }}</td>
                                    <td>{{ $book->penerbit }}</td>
                                    <td>{{ $book->tahun_terbit }}</td>
                                    <td>{{ $book->stok }}</td>
                                    {{--  <td>{{ $book->kondisi }}</td>  --}}
                                    <td>{{ $book->categories->pluck('name')->implode(', ') }}</td>
                                    <td>
                                        <a href="{{ route('books.edit', $book->id) }}" class="btn btn-primary btn-sm">Edit</a>
                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal"
                                            data-id="{{ $book->id }}"
                                            data-judul="{{ $book->judul }}">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal Konfirmasi Hapus -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">Konfirmasi Hapus</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Apakah Anda yakin ingin menghapus buku "<span id="judulBuku"></span>"?</p>
                <p class="text-danger">Tindakan ini tidak dapat dibatalkan!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                <form id="deleteForm" method="POST" action="">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Hapus</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    $(document).ready(function() {
        // Setup modal untuk konfirmasi hapus
        $('#deleteModal').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget);
            const id = button.data('id');
            const judul = button.data('judul');

            const modal = $(this);
            modal.find('#judulBuku').text(judul);

            // Set action URL form delete
            const deleteUrl = "{{ route('books.destroy', ':id') }}".replace(':id', id);
            modal.find('#deleteForm').attr('action', deleteUrl);
        });
    });
</script>
@endsection

