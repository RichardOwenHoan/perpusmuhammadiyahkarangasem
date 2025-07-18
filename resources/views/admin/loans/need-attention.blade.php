@extends('admin.layouts.main')

@section('title', 'Daftar Siswa Perlu Ditindaklanjuti')

@push('css')
<style>
    .attention-badge {
        padding: 8px 12px;
        border-radius: 15px;
        font-size: 11px;
        font-weight: 600;
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    .late-days {
        color: #dc3545;
        font-weight: bold;
    }
    .fine-amount {
        font-weight: bold;
        color: #dc3545;
    }
    .loan-actions .btn {
        margin: 0 3px;
    }
</style>
@endpush

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                        <li class="breadcrumb-item active">Siswa Perlu Ditindaklanjuti</li>
                    </ol>
                </div>
                <h4 class="page-title">Daftar Siswa Perlu Ditindaklanjuti</h4>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="alert alert-danger">
                        <i class="mdi mdi-alert-circle-outline me-2"></i>
                        Siswa-siswa di bawah ini telah terlambat mengembalikan buku selama minimal 3 hari dan telah menerima 3 kali pengingat via email. Silakan tindak lanjuti dengan menghubungi mereka secara langsung.
                    </div>

                    @if($loans->isEmpty())
                        <div class="alert alert-info">
                            <i class="mdi mdi-information-outline me-2"></i>
                            Tidak ada siswa yang perlu ditindaklanjuti saat ini.
                        </div>
                    @else
                        <div class="table-responsive">
                            <table class="table table-centered table-striped dt-responsive nowrap w-100">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Siswa</th>
                                        <th>Buku</th>
                                        <th>Tanggal Pinjam</th>
                                        <th>Jatuh Tempo</th>
                                        <th>Keterlambatan</th>
                                        <th>Denda</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php $counter = 1; @endphp
                                    @foreach($loans as $loan)
                                        @php
                                            $today = \Carbon\Carbon::today();
                                            $returnDate = \Carbon\Carbon::parse($loan->return_date);
                                            $lateInDays = $today->diffInDays($returnDate, false) * -1;
                                            $denda = $lateInDays * 1000;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter++ }}</td>
                                            <td>
                                                <h5 class="font-14 my-0">{{ $loan->user->name }}</h5>
                                                <span class="text-muted font-13">{{ $loan->user->email }}</span>
                                                <br>
                                                <span class="text-muted font-13">{{ $loan->user->phone ?? '-' }}</span>
                                                <br>
                                                <span class="attention-badge">
                                                    <i class="mdi mdi-alert-circle"></i> Perlu Ditindaklanjuti
                                                </span>
                                            </td>
                                            <td>
                                                <h5 class="font-14 my-0">{{ $loan->book->judul }}</h5>
                                                <span class="text-muted font-13">{{ $loan->book->pengarang }}</span>
                                                <br>
                                                <small class="text-muted">{{ $loan->book->kode_buku }}</small>
                                            </td>
                                            <td>{{ $loan->loan_date->format('d-m-Y') }}</td>
                                            <td>{{ $loan->return_date->format('d-m-Y') }}</td>
                                            <td>
                                                <span class="late-days">{{ $lateInDays }} hari</span>
                                            </td>
                                            <td>
                                                <span class="fine-amount">Rp {{ number_format($denda, 0, ',', '.') }}</span>
                                            </td>
                                            <td class="loan-actions">
                                                <a href="{{ route('admin.loans.show', $loan->id) }}" class="btn btn-info btn-sm">
                                                    <i class="mdi mdi-eye"></i>
                                                </a>
                                                <a href="tel:{{ $loan->user->phone }}" class="btn btn-primary btn-sm" title="Telepon Siswa" {{ $loan->user->phone ? '' : 'disabled' }}>
                                                    <i class="mdi mdi-phone"></i>
                                                </a>
                                                <a href="mailto:{{ $loan->user->email }}" class="btn btn-success btn-sm" title="Email Siswa">
                                                    <i class="mdi mdi-email"></i>
                                                </a>
                                                <button type="button" class="btn btn-warning btn-sm" 
                                                    onclick="markResolved({{ $loan->id }})" title="Tandai Sudah Ditindaklanjuti">
                                                    <i class="mdi mdi-check-circle"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="mt-3">
                            {{ $loans->links('pagination::bootstrap-5') }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    function markResolved(loanId) {
        if (confirm('Apakah Anda yakin sudah menindaklanjuti siswa ini?')) {
            // Submit form untuk menandai sudah ditindaklanjuti
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `{{ route('admin.loans.mark-resolved', '') }}/${loanId}`;
            
            const csrfToken = document.createElement('input');
            csrfToken.type = 'hidden';
            csrfToken.name = '_token';
            csrfToken.value = '{{ csrf_token() }}';
            
            const method = document.createElement('input');
            method.type = 'hidden';
            method.name = '_method';
            method.value = 'PUT';
            
            form.appendChild(csrfToken);
            form.appendChild(method);
            document.body.appendChild(form);
            form.submit();
        }
    }
</script>
@endpush 