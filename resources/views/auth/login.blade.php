@extends('LandingPage.layouts.main')

@section('title', 'Login - Perpustakaan SMP Muhammadiyah Karang Asem')

@section('css')
<style>
    .login-section {
        padding: 80px 0;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('{{ asset('sekolah.jpg') }}');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    
    .login-container {
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        padding: 0;
    }
    
    .login-image {
        background: url('{{ asset('perpustakaan.jpeg') }}');
        background-size: cover;
        background-position: center;
        min-height: 400px;
        position: relative;
    }
    
    .login-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(13, 110, 253, 0.75);
    }
    
    .login-image-content {
        position: relative;
        z-index: 1;
        padding: 50px 30px;
        color: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .login-image-content h3 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #fff;
    }
    
    .login-image-content p {
        font-size: 16px;
        margin-bottom: 30px;
        line-height: 1.7;
    }
    
    .login-form-container {
        padding: 50px 40px;
    }
    
    .login-heading {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .login-heading h2 {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 10px;
    }
    
    .login-heading p {
        color: #666;
        font-size: 16px;
    }
    
    .form-group {
        margin-bottom: 25px;
    }
    
    .form-group label {
        font-weight: 600;
        color: #555;
        margin-bottom: 10px;
        display: block;
    }
    
    .form-control {
        height: 50px;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        padding: 10px 20px;
        font-size: 16px;
        transition: all 0.3s;
    }
    
    .form-control:focus {
        border-color: #0d6efd;
        box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }
    
    .btn-login {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        background: #0d6efd;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s;
        border: none;
        margin-top: 10px;
    }
    
    .btn-login:hover {
        background: #0a58ca;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
    }
    
    .remember-me {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .remember-me input {
        margin-right: 10px;
    }
    
    .remember-me label {
        margin: 0;
        color: #555;
        font-size: 14px;
    }
    
    .login-footer {
        margin-top: 30px;
        text-align: center;
    }
    
    .login-footer a {
        color: #0d6efd;
        font-weight: 600;
        transition: all 0.3s;
    }
    
    .login-footer a:hover {
        text-decoration: underline;
    }
    
    .invalid-feedback {
        color: #dc3545;
        font-size: 14px;
        margin-top: 5px;
    }
    
    .feature-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .feature-list li {
        padding: 8px 0;
        display: flex;
        align-items: center;
    }
    
    .feature-list li i {
        margin-right: 10px;
        color: #fff;
        font-size: 18px;
    }
    
    @media (max-width: 991px) {
        .login-image {
            min-height: 300px;
        }
    }
    
    @media (max-width: 767px) {
        .login-form-container {
            padding: 40px 20px;
        }
    }
</style>
@endsection

@section('content')
<section class="login-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="login-container row">
                    <div class="col-md-5 login-image">
                        <div class="login-image-content">
                            <h3>Selamat Datang di Perpustakaan SMP Muhammadiyah</h3>
                            <p style="color: white;">Akses ribuan koleksi buku digital dan cetak untuk mendukung pembelajaran dan literasi.</p>
                            
                            <ul class="feature-list">
                                <li><i class="fa fa-check-circle"></i> Peminjaman buku cepat dan mudah</li>
                                <li><i class="fa fa-check-circle"></i> Akses katalog buku lengkap</li>
                                <li><i class="fa fa-check-circle"></i> Perpanjangan masa peminjaman online</li>
                                <li><i class="fa fa-check-circle"></i> Notifikasi pengembalian buku</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-7 login-form-container">
                        <div class="login-heading">
                            <h2>Masuk</h2>
                            <p>Masukkan informasi login untuk melanjutkan</p>
                        </div>
                        
                        <!-- Session Status -->
                        @if (session('status'))
                            <div class="alert alert-info" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            
                            <!-- Email or NIS -->
                            <div class="form-group">
                                <label for="identity">Email atau NIS</label>
                                <input id="identity" type="text" class="form-control @error('identity') is-invalid @enderror" name="identity" value="{{ old('identity') }}" required autofocus autocomplete="username">
                                @error('identity')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            
                            <!-- Password -->
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            
                            <!-- Remember Me -->
                            <div class="remember-me">
                                <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label for="remember">Ingat saya</label>
                            </div>
                            
                            <button type="submit" class="btn-login">
                                Masuk
                            </button>
                            
                            <div class="login-footer">
                                @if (Route::has('password.request'))
                                    <a href="{{ route('password.request') }}">
                                        Lupa password?
                                    </a>
                                @endif
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
