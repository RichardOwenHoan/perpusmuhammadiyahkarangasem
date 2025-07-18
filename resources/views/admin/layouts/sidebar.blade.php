<!-- Peminjaman Buku -->
<li class="nav-item">
    <a class="nav-link" href="#bookLoans" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="bookLoans">
        <i class="uil-book-open menu-icon"></i>
        <span>Peminjaman Buku</span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="bookLoans">
        <ul class="nav-list list-unstyled">
            <li>
                <a href="{{ route('admin.loans.index') }}">Daftar Peminjaman</a>
            </li>
            <li>
                <a href="{{ route('admin.loans.need-attention') }}">
                    Siswa Perlu Tindak Lanjut
                    @php
                        $attentionCount = \App\Models\BookLoan::where('need_attention', true)->count();
                    @endphp
                    @if($attentionCount > 0)
                        <span class="badge bg-danger rounded-pill ms-1">{{ $attentionCount }}</span>
                    @endif
                </a>
            </li>
        </ul>
    </div>
</li> 