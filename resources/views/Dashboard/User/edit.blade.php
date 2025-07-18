@extends('Dashboard.layouts.main')

@section('content')

<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{ $user->role == 'admin' ? route('dashboard.users.indexAdmin') : route('dashboard.users.index') }}">
                {{ $user->role == 'admin' ? 'Manajemen Admin' : 'Manajemen Siswa' }}
            </a></li>
            <li class="breadcrumb-item active" aria-current="page">Edit Pengguna</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Edit Pengguna</h6>

                    @if ($errors->any())
                    <div class="alert alert-danger mt-3">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif

                    <form action="{{ route('dashboard.users.update', $user->id) }}" method="POST" class="forms-sample mt-3">
                        @csrf
                        @method('PUT')

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="name" name="name" value="{{ old('name', $user->name) }}" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" value="{{ old('email', $user->email) }}" required>
                                </div>
                                <div class="mb-3">
                                    <label for="role" class="form-label">Role</label>
                                    <select class="form-select" id="role" name="role" required>
                                        <option value="admin" {{ old('role', $user->role) == 'admin' ? 'selected' : '' }}>Admin</option>
                                        <option value="siswa" {{ old('role', $user->role) == 'siswa' ? 'selected' : '' }}>Siswa</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 siswa-field" style="{{ old('role', $user->role) == 'siswa' ? '' : 'display: none;' }}">
                                    <label for="nis" class="form-label">NIS</label>
                                    <input type="text" class="form-control" id="nis" name="nis" value="{{ old('nis', $user->nis) }}">
                                </div>
                                <div class="mb-3 siswa-field" style="{{ old('role', $user->role) == 'siswa' ? '' : 'display: none;' }}">
                                    <label for="kelas" class="form-label">Kelas</label>
                                    <input type="text" class="form-control" id="kelas" name="kelas" value="{{ old('kelas', $user->kelas) }}">
                                </div>
                            </div>
                        </div>

                        <div class="d-flex mt-3">
                            <a href="{{ $user->role == 'admin' ? route('dashboard.users.indexAdmin') : route('dashboard.users.index') }}" class="btn btn-secondary me-2">Batal</a>
                            <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    $(document).ready(function() {
        // Tampilkan/sembunyikan field siswa berdasarkan role yang dipilih
        $('#role').change(function() {
            if ($(this).val() === 'siswa') {
                $('.siswa-field').show();
            } else {
                $('.siswa-field').hide();
            }
        });
    });
</script>
@endsection 