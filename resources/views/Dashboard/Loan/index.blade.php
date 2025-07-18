@extends('Dashboard.layouts.main')

@section('content')
    <div class="page-content">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data Peminjaman Buku</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-1 justify-content-between align-items-center">
                            <h6 class="">Daftar Peminjaman</h6>
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exportModal">
                                Export
                            </button>
                        </div>

                        @if (session('success'))
                            <div class="alert alert-success alert-dismissible fade show">
                                {{ session('success') }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif

                        @if (session('error'))
                            <div class="alert alert-danger alert-dismissible fade show">
                                {{ session('error') }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif

                        <div class="table-responsive">
                            <table id="dataTableLoan" class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Peminjam</th>
                                        <th>Judul Buku</th>
                                        <th>Kode Buku</th>
                                        <th>Tanggal Pinjam</th>
                                        <th>Tanggal Kembali</th>
                                        <th>Status Verifikasi</th>
                                        <th>Status Peminjaman</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($loans as $loan)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $loan->user->name }}</td>
                                            <td>{{ $loan->book->judul }}</td>
                                            <td>{{ $loan->book->kode_buku }}</td>
                                            <td>{{ $loan->loan_date->format('d/m/Y') }}</td>
                                            <td>{{ $loan->return_date->format('d/m/Y') }}</td>
                                            <td>
                                                @if ($loan->status_verifikasi == 'pending')
                                                    <span class="badge bg-warning text-dark">Menunggu</span>
                                                @elseif ($loan->status_verifikasi == 'verified')
                                                    <span class="badge bg-success text-white">Terverifikasi</span>
                                                @elseif ($loan->status_verifikasi == 'ditolak')
                                                    <span class="badge bg-danger text-white">Ditolak</span>
                                                @endif
                                            </td>
                                            <td>
                                                @if ($loan->status_peminjaman == 'diperpanjang')
                                                    <span class="badge bg-warning text-dark">Diperpanjang</span>
                                                @elseif ($loan->status_peminjaman == 'dipinjam')
                                                    <span class="badge bg-success text-white">Dipinjam</span>
                                                @elseif ($loan->status_peminjaman == 'dikembalikan')
                                                    <span class="badge bg-success text-white">Dikembalikan</span>
                                                @else
                                                    <span class="badge bg-success text-white">Belum Dipinjam</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('dashboard.loans.show', $loan->id) }}"
                                                    class="btn btn-info btn-sm">Lihat</a>
                                                @if ($loan->status_verifikasi == 'pending')
                                                    <button type="submit" class="btn btn-sm btn-success"
                                                        data-toggle="modal" data-target="#verifModal{{ $loan->id }}">
                                                        <i data-feather="check"></i> Verifikasi
                                                    </button>
                                                    <button type="button" class="btn btn-sm btn-danger" data-toggle="modal"
                                                        data-target="#rejectModal{{ $loan->id }}">
                                                        <i data-feather="x"></i> Tolak
                                                    </button>
                                                @endif
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



        <!-- Modal Tolak Peminjaman -->
        @foreach ($loans as $loan)
            @if ($loan->status_verifikasi == 'pending')
                <div class="modal fade" id="rejectModal{{ $loan->id }}" tabindex="-1"
                    aria-labelledby="rejectModalLabel{{ $loan->id }}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="rejectModalLabel{{ $loan->id }}">Tolak Peminjaman</h5>
                                <button type="button" class="btn-close btn btn-secondary" data-bs-dismiss="modal"
                                    aria-label="Close">X</button>
                            </div>
                            <form action="{{ route('dashboard.loans.reject', $loan->id) }}" method="POST">
                                @csrf
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class="form-label">Peminjam</label>
                                        <input type="text" class="form-control" value="{{ $loan->user->name }}"
                                            readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Buku</label>
                                        <input type="text" class="form-control" value="{{ $loan->book->judul }}"
                                            readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="keterangan_penolakan" class="form-label">Alasan Penolakan <span
                                                class="text-danger">*</span></label>
                                        <textarea class="form-control" id="keterangan_penolakan" name="keterangan_penolakan" rows="4"
                                            placeholder="Masukkan alasan penolakan peminjaman..." required></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                    <button type="submit" class="btn btn-danger"
                                        onclick="return confirm('Yakin ingin menolak peminjaman ini?')">Tolak
                                        Peminjaman</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="verifModal{{ $loan->id }}" tabindex="-1"
                    aria-labelledby="verifModalLabel{{ $loan->id }}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verifModalLabel{{ $loan->id }}">Konfirmasi Peminjaman
                                </h5>
                                <button type="button" class="btn-close btn btn-secondary" data-bs-dismiss="modal"
                                    aria-label="Close">X</button>
                            </div>
                            <form action="{{ route('dashboard.loans.verify', $loan->id) }}" method="POST">
                                @csrf
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class="form-label">Peminjam</label>
                                        <input type="text" class="form-control" value="{{ $loan->user->name }}"
                                            readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Buku</label>
                                        <input type="text" class="form-control" value="{{ $loan->book->judul }}"
                                            readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="catatan" class="form-label">Catatan</label>
                                        <textarea class="form-control" id="catatan" name="catatan" rows="4" placeholder="Masukkan catatan..."></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Batal</button>
                                    <button type="submit" class="btn btn-success"
                                        onclick="return confirm('Yakin ingin konfirmasi peminjaman ini?')">Konfirmasi
                                        Peminjaman</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            @endif
        @endforeach

        <!-- Export Modal -->
        <div class="modal fade" id="exportModal" tabindex="-1" aria-labelledby="exportModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <form id="exportForm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exportModalLabel">Pilih Rentang Tanggal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="from-date" class="form-label">Dari Tanggal</label>
                                <input type="date" class="form-control" id="from-date" name="from" required>
                            </div>
                            <div class="mb-3">
                                <label for="to-date" class="form-label">Sampai Tanggal</label>
                                <input type="date" class="form-control" id="to-date" name="to" required>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                            <button type="submit" class="btn btn-success">Download</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#dataTableLoan').DataTable({
                "aLengthMenu": [
                    [10, 30, 50, -1],
                    [10, 30, 50, "All"]
                ],
                "iDisplayLength": 10,
                "language": {
                    search: ""
                }
            });
            $('#dataTableExample').each(function() {
                var datatable = $(this);
                // SEARCH - Add the placeholder for Search and Turn this into in-line form control
                var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
                search_input.attr('placeholder', 'Cari');
                search_input.removeClass('form-control-sm');
                // LENGTH - Inline-Form control
                var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
                length_sel.removeClass('form-control-sm');
            });

            $('#exportForm').on('submit', function(e) {
                e.preventDefault();
                var from = $('#from-date').val();
                var to = $('#to-date').val();

                if (from && to) {
                    var url = "{{ route('dashboard.loans.export') }}?from=" + from + "&to=" + to;
                    window.open(url, '_blank'); // opens in a new tab/window
                    $('#exportModal').modal('hide');
                } else {
                    alert('Silakan pilih rentang tanggal.');
                }
            });
        });
    </script>
@endsection
