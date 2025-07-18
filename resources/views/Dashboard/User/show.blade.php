@extends('Dashboard.layouts.main')

@section('content')

<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{ $user->role == 'admin' ? route('dashboard.users.indexAdmin') : route('dashboard.users.index') }}">
                {{ $user->role == 'admin' ? 'Manajemen Admin' : 'Manajemen Siswa' }}
            </a></li>
            <li class="breadcrumb-item active" aria-current="page">Detail Pengguna</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Detail Pengguna</h6>

                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama</label>
                                <p>{{ $user->name }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <p>{{ $user->email }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Role</label>
                                <p>
                                    @if($user->role == 'admin')
                                        <span class="badge bg-primary">Admin</span>
                                    @else
                                        <span class="badge bg-info">Siswa</span>
                                    @endif
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            @if($user->role == 'siswa')
                            <div class="mb-3">
                                <label class="form-label fw-bold">NIS</label>
                                <p>{{ $user->nis ?? 'Belum diisi' }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Kelas</label>
                                <p>{{ $user->kelas ?? 'Belum diisi' }}</p>
                            </div>
                            @endif
                            <div class="mb-3">
                                <label class="form-label fw-bold">Tanggal Registrasi</label>
                                <p>{{ $user->created_at->format('d M Y H:i') }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Terakhir Login</label>
                                <p>{{ $user->last_login_at ? $user->last_login_at->format('d M Y H:i') : 'Belum pernah login' }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex mt-4">
                        <a href="{{ $user->role == 'admin' ? route('dashboard.users.indexAdmin') : route('dashboard.users.index') }}" class="btn btn-secondary me-2">
                            Kembali
                        </a>
                        <a href="{{ route('dashboard.users.edit', $user->id) }}" class="btn btn-primary">
                            Edit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection 