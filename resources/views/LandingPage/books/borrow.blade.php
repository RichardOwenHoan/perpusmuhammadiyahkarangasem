@extends('LandingPage.layouts.main')

@section('title', 'Pinjam Buku - ' . $book->judul)

@section('css')
<style>
    .loan-container {
        padding: 40px 0;
    }
    .loan-title {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
    }
    .book-summary {
        display: flex;
        background: #f9f9f9;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .book-image-container {
        flex: 0 0 120px;
        margin-right: 20px;
    }
    .book-image {
        width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
    .book-info {
        flex: 1;
    }
    .book-info-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }
    .book-info-author {
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
    }
    .book-info-code {
        font-size: 13px;
        color: #888;
    }
    .loan-form {
        background: #fff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
    }
    .date-input-group {
        margin-bottom: 20px;
    }
    .date-input-label {
        font-weight: 600;
        margin-bottom: 8px;
        display: block;
    }
    .date-input-help {
        font-size: 13px;
        color: #666;
        margin-top: 5px;
    }
    .form-buttons {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .rules-container {
        background: #f0f8ff;
        border-radius: 10px;
        padding: 20px;
        margin-top: 30px;
        border-left: 4px solid #0d6efd;
    }
    .rules-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #0d6efd;
    }
    .rules-list {
        padding-left: 20px;
        margin-bottom: 0;
    }
    .rules-list li {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .rules-list li:last-child {
        margin-bottom: 0;
    }
    .alert-container {
        margin-bottom: 25px;
    }
</style>
@endsection

@section('content')
<section class="loan-container">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="loan-title">Form Peminjaman Buku</h1>
                
                @if(session('error'))
                <div class="alert-container">
                    <div class="alert alert-danger">
                        {{ session('error') }}
                    </div>
                </div>
                @endif
                
                <div class="book-summary">
                    <div class="book-image-container">
                        @if($book->gambar)
                            <img src="{{ asset('storage/' . $book->gambar) }}" alt="{{ $book->judul }}" class="book-image">
                        @else
                            <img src="{{ asset('LP/default-book.png') }}" alt="{{ $book->judul }}" class="book-image">
                        @endif
                    </div>
                    <div class="book-info">
                        <h3 class="book-info-title">{{ $book->judul }}</h3>
                        <p class="book-info-author">Pengarang: {{ $book->pengarang }}</p>
                        <p class="book-info-code">Kode Buku: {{ $book->kode_buku }}</p>
                    </div>
                </div>
                
                <form class="loan-form" action="{{ route('siswa.books.borrow', $book->id) }}" method="POST">
                    @csrf
                    
                    <div class="date-input-group">
                        <label for="loan_date" class="date-input-label">Tanggal Peminjaman:</label>
                        <input type="date" name="loan_date" id="loan_date" class="form-control @error('loan_date') is-invalid @enderror" 
                               value="{{ old('loan_date', $today) }}" min="{{ $today }}">
                        
                        @error('loan_date')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                        
                        <p class="date-input-help">Tanggal peminjaman harus hari ini atau setelahnya.</p>
                    </div>
                    
                    <div class="date-input-group">
                        <label for="return_date" class="date-input-label">Tanggal Pengembalian:</label>
                        <input type="date" name="return_date_display" id="return_date" class="form-control" 
                               value="{{ old('return_date', $returnDate) }}" disabled>
                        <input type="hidden" name="return_date" id="hidden_return_date" value="{{ old('return_date', $returnDate) }}">
                        
                        @error('return_date')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                        
                        <p class="date-input-help">Tanggal pengembalian otomatis 3 hari dari tanggal peminjaman.</p>
                    </div>
                    
                    <div class="form-buttons">
                        <a href="{{ route('landing.books.show', $book->id) }}" class="btn btn-secondary">Kembali</a>
                        <button type="submit" class="btn btn-primary">Ajukan Peminjaman</button>
                    </div>
                </form>
                
                <div class="rules-container">
                    <h4 class="rules-title">Peraturan Peminjaman:</h4>
                    <ul class="rules-list">
                        <li>Setiap siswa hanya diperbolehkan meminjam 1 buku pada satu waktu.</li>
                        <li>Durasi peminjaman maksimal 3 hari.</li>
                        <li>Peminjaman buku harus diverifikasi oleh petugas perpustakaan.</li>
                        <li>Terlambat mengembalikan buku akan dikenakan denda.</li>
                        <li>Buku yang rusak atau hilang harus diganti dengan buku yang sama.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@section('js')
<script>
    // Fungsi untuk menghitung tanggal pengembalian (3 hari setelah tanggal peminjaman)
    function calculateReturnDate(loanDateStr) {
        const loanDate = new Date(loanDateStr);
        const returnDate = new Date(loanDate);
        returnDate.setDate(loanDate.getDate() + 3);
        
        // Format tanggal menjadi YYYY-MM-DD
        return returnDate.toISOString().split('T')[0];
    }
    
    // Update tanggal pengembalian saat tanggal peminjaman berubah
    document.getElementById('loan_date').addEventListener('change', function() {
        const returnDateFormatted = calculateReturnDate(this.value);
        document.getElementById('return_date').value = returnDateFormatted;
        document.getElementById('hidden_return_date').value = returnDateFormatted;
    });
    
    // Set tanggal pengembalian awal saat halaman dimuat
    window.addEventListener('DOMContentLoaded', function() {
        const loanDate = document.getElementById('loan_date').value;
        const returnDateFormatted = calculateReturnDate(loanDate);
        document.getElementById('return_date').value = returnDateFormatted;
        document.getElementById('hidden_return_date').value = returnDateFormatted;
    });
</script>
@endsection 