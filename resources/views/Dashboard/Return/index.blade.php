@extends('Dashboard.layouts.main')

@section('content')
<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data Pengembalian Buku</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Buku yang Sedang Dipinjam</h6>

                    @if(session('success'))
                    <div class="alert alert-success alert-dismissible fade show">
                        {{ session('success') }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif

                    @if(session('error'))
                    <div class="alert alert-danger alert-dismissible fade show">
                        {{ session('error') }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif

                    <div class="table-responsive">
                        <table id="dataTableReturn" class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Peminjam</th>
                                    <th>Judul Buku</th>
                                    <th>Kode Buku</th>
                                    <th>Tanggal Pinjam</th>
                                    <th>Tanggal Kembali</th>
                                    <th>Status</th>
                                    <th>Reminder</th>
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
                                        @if ($loan->status_peminjaman == 'dipinjam')
                                            <span class="badge bg-info">Dipinjam</span>
                                        @elseif ($loan->status_peminjaman == 'diperpanjang')
                                            <span class="badge bg-primary">Diperpanjang</span>
                                        @endif
                                        
                                        @if ($loan->return_date->isPast())
                                            <span class="badge bg-danger">Terlambat</span>
                                        @elseif ($loan->return_date->isToday())
                                            <span class="badge bg-warning text-dark">Jatuh Tempo Hari Ini</span>
                                        @endif
                                    </td>
                                    <td>
                                        @if ($loan->reminder_logs)
                                            @php $logs = json_decode($loan->reminder_logs, true); @endphp
                                            <span class="badge bg-info">{{ count($logs) }} reminder</span>
                                            @if (count($logs) > 0)
                                                @php $lastSent = \Carbon\Carbon::parse(end($logs)['sent_at']); @endphp
                                                <small class="d-block text-muted">Terakhir: {{ $lastSent->diffForHumans() }}</small>
                                            @endif
                                        @else
                                            <span class="badge bg-secondary">Belum ada</span>
                                        @endif
                                    </td>
                                    <td class="text-center">
                                        <div class="btn-group">
                                            <form action="{{ route('dashboard.returns.process', $loan->id) }}" method="POST" class="d-inline">
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-success me-1" onclick="return confirm('Konfirmasi pengembalian buku ini?')">
                                                    <i data-feather="check"></i> Kembalikan
                                                </button>
                                            </form>
                                            
                                            <button type="button" class="btn btn-sm btn-primary mx-1" data-toggle="modal" data-target="#extendModal{{ $loan->id }}">
                                                <i data-feather="clock"></i> Perpanjang
                                            </button>
                                            
                                            <form action="{{ route('dashboard.returns.remind', $loan->id) }}" method="POST" class="d-inline">
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-warning" onclick="return confirm('Kirim reminder pengembalian buku ke siswa ini?')">
                                                    <i data-feather="mail"></i> Kirim Reminder
                                                </button>
                                            </form>
                                        </div>
                                        
                                        <!-- Modal Perpanjangan -->
                                        <div class="modal fade" id="extendModal{{ $loan->id }}" tabindex="-1" role="dialog" aria-labelledby="extendModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="extendModalLabel">Perpanjang Peminjaman</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <form action="{{ route('dashboard.returns.extend', $loan->id) }}" method="POST">
                                                        @csrf
                                                        <div class="modal-body">
                                                            <div class="form-group">
                                                                <label for="extension_days">Jumlah Hari Perpanjangan:</label>
                                                                <select class="form-control" id="extension_days" name="extension_days" required>
                                                                    <option value="3">3 Hari</option>
                                                                    <option value="7" selected>7 Hari</option>
                                                                    <option value="14">14 Hari</option>
                                                                    <option value="30">30 Hari</option>
                                                                </select>
                                                            </div>
                                                            <p>
                                                                Tanggal kembali saat ini: <strong>{{ $loan->return_date->format('d/m/Y') }}</strong>
                                                            </p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                                                            <button type="submit" class="btn btn-primary">Perpanjang</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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
@endsection

@section('scripts')
<script>
    $(document).ready(function() {
        $('#dataTableReturn').DataTable({
            "aLengthMenu": [
                [10, 30, 50, -1],
                [10, 30, 50, "All"]
            ],
            "iDisplayLength": 10,
            "language": {
                search: ""
            }
        });
        $('#dataTableReturn').each(function() {
            var datatable = $(this);
            // SEARCH - Add the placeholder for Search and Turn this into in-line form control
            var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
            search_input.attr('placeholder', 'Cari');
            search_input.removeClass('form-control-sm');
            // LENGTH - Inline-Form control
            var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
            length_sel.removeClass('form-control-sm');
        });
    });
</script>
@endsection
