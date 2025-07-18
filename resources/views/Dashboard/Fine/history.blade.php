@extends('Dashboard.layouts.main')

@section('content')
    <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Riwayat Pembayaran Denda</h1>
            <a href="{{ route('admin.fines.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-arrow-left fa-sm text-white-50"></i> Kembali ke Daftar Denda
            </a>
        </div>

        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Daftar Denda yang Sudah Dibayar</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Peminjam</th>
                                <th>Judul Buku</th>
                                <th>Tanggal Pinjam</th>
                                <th>Tanggal Jatuh Tempo</th>
                                <th>Tanggal Pengembalian</th>
                                <th>Keterlambatan</th>
                                <th>Jumlah Denda</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($paidFines as $index => $fine)
                                <tr>
                                    <td>{{ $index + $paidFines->firstItem() }}</td>
                                    <td>{{ $fine->user->name }}</td>
                                    <td>{{ $fine->book->judul }}</td>
                                    <td>{{ $fine->loan_date->format('d/m/Y') }}</td>
                                    <td>{{ $fine->return_date->format('d/m/Y') }}</td>
                                    <td>{{ $fine->actual_return_date->format('d/m/Y') }}</td>
                                    <td>{{ $fine->actual_return_date->diffInDays($fine->return_date) }} hari</td>
                                    <td>Rp {{ number_format($fine->denda, 0, ',', '.') }}</td>
                                    <td>
                                        <span class="badge badge-success">Sudah Dibayar</span>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="9" class="text-center">Tidak ada data riwayat pembayaran denda</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-end">
                    {{ $paidFines->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script>
    $(document).ready(function() {
        $('#dataTable').DataTable({
            paging: false,
            searching: true,
            ordering: true,
            info: false,
        });
    });
</script>
@endpush 