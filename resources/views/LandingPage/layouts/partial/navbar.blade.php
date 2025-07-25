<header class="clearfix">
    {{-- <div class="top-line">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <p><i class="material-icons">phone</i> <span>+62 8123456789</span></p>
                    <p><i class="material-icons">email</i> <span>perpus.smpmukarang@gmail.com</span></p>
                </div>
                <div class="col-lg-6">
                    <div class="right-top-line">
                        <ul class="top-menu">
                            <li><a href="{{ route('landing.about') }}">Tentang Kami</a></li>
                            <li><a href="#">Jam Buka</a></li>
                            <li><a href="#">Kontak</a></li>
                            @auth
                                @if (auth()->user()->isSiswa())
                                    <li><a href="{{ route('siswa.books.loans.history') }}">Riwayat Peminjaman</a></li>
                                @endif
                            @endauth
                        </ul>
                        <button class="search-icon">
                            <i class="material-icons open-search">search</i>
                            <i class="material-icons close-search">close</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div> --}}

    <form class="search_bar">
        <div class="container">
            <input type="search" class="search-input" placeholder="Cari buku yang anda inginkan...">
            <button type="submit" class="submit">
                <i class="material-icons">search</i>
            </button>
        </div>
    </form>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">

            <a class="navbar-brand" style="margin-right: 0px;" href="{{ route('landing.home') }}">
                <img src="/LP/assets/images/logo3.png" style="margin-right: 0px;" width="70px"
                    alt="Perpustakaan SMP Muhammadiyah">
            </a>

            @auth
                <div class="navbar-brand d-block d-lg-none" style="margin-right: 0px;">
                    <h3 class="text-dark" style="margin-right: 0px; margin-top: 10px;">
                        Selamat Datang, {{ auth()->user()->name }}
                    </h3>
                </div>
            @endauth

            <a href="#" class="mobile-nav-toggle">
                <span></span>
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('landing.home') ? 'active' : '' }}"
                            href="{{ route('landing.home') }}">Beranda</a>
                    </li>
                    <li class="drop-link">
                        <a href="{{ route('landing.books') }}"
                            class="{{ request()->routeIs('landing.books*') ? 'active' : '' }}">Koleksi Buku <i
                                class="fa fa-angle-down"></i></a>
                        <ul class="dropdown">
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            {{-- <li><strong class="dropdown-header">Kategori Buku</strong></li> --}}
                            <li>
                                <a
                                    href="{{ route('landing.books') }}?sortBy=created_at&sortDirection=desc">Buku
                                    Terbaru</a>
                            </li>

                            <li>
                                <a
                                    href="{{ route('landing.books') }}?sortBy=stok&sortDirection=asc">Buku Populer</a>
                            </li>
                            <li><a href="{{ route('landing.books') }}">Semua Kategori</a></li>
                            @foreach ($navbarCategories as $category)
                                <li><a
                                        href="{{ route('landing.books') }}?category={{ $category->id }}">{{ $category->name }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('landing.about') ? 'active' : '' }}"
                            href="{{ route('landing.about') }}">Tentang Kami</a>
                    </li>


                    @auth
                        @if (auth()->user()->isSiswa())
                            <li class="nav-item">
                                <a class="nav-link {{ request()->routeIs('siswa.books.loans.history') ? 'active' : '' }}"
                                    href="{{ route('siswa.books.loans.history') }}">Riwayat Peminjaman</a>
                            </li>
                        @endif
                    @endauth

                </ul>
                @auth

                    @if (auth()->user()->role === 'admin')
                        <a href="/dashboard/books" class="register-modal-opener login-button"
                            style="background-color: #52843e; color: #fff; margin-right: 10px;"> Dashboard</a>
                    @endif
                    <div>
                        <nav class="navbar">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdownx nav-profile">
                                    <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        @if (Auth::user()->gambar == null)
                                            <img src="/DB/assets/images/admin/0.png"
                                                style="width: 30px; height: 30px; border-radius: 50%;" alt="">
                                        @else
                                            <img src="{{ asset('storage/' . Auth::user()->gambar) }}" alt="profile"
                                                style="width: 30px; height: 30px; border-radius: 50%;">
                                        @endif
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="profileDropdown"
                                        style="right: -100px; left: auto; transform: translateX(5px);">
                                        <div class="dropdown-header d-flex flex-column align-items-center">
                                            <div class="figure mb-3">
                                                @if (Auth::user()->gambar == null)
                                                    <img src="/DB/assets/images/admin/0.png"
                                                        style="width: 30px; height: 30px; border-radius: 50%;"
                                                        alt="">
                                                @else
                                                    <img src="{{ asset('storage/' . Auth::user()->gambar) }}"
                                                        style="width: 30px; height: 30px; border-radius: 50%;"
                                                        alt="profile">
                                                @endif
                                            </div>
                                            <div class="info text-center">
                                                <p class="name font-weight-bold mb-0">{{ Auth::user()->name }}</p>
                                                <p class="email text-muted mb-3">{{ Auth::user()->email }}</p>
                                            </div>
                                        </div>
                                        <div class="dropdown-body">
                                            <ul class="profile-nav p-0 pt-3">
                                                <li class="nav-item">
                                                    <a href="/profile" class="nav-link">
                                                        <i data-feather="edit"></i>
                                                        <span>Edit Profile</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <form action="{{ route('logout') }}" method="POST">
                                                        @csrf
                                                        <button class="nav-link border-0 bg-transparent" type="submit">
                                                            <i data-feather="log-out"></i>
                                                            <span>Log Out</span>
                                                        </button>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {{-- <form method="POST" action="{{ route('logout') }}" style="display: inline;">
                    @csrf
                    <button type="submit" class="register-modal-opener login-button" style="background-color: #ff0000; color: #fff; border: none; cursor: pointer;">
                        <i class="material-icons">exit_to_app</i> Logout
                    </button>
                </form> --}}
                @else
                    <a href="{{ route('login') }}" class="register-modal-opener login-button"><i
                            class="material-icons">perm_identity</i> Masuk</a>
                @endauth
            </div>
        </div>
    </nav>

    <div class="mobile-menu">
        <div class="search-form-box">
            <form class="search-form">
                <input type="search" class="search-field" placeholder="Cari buku...">
                <button type="submit" class="search-submit">
                    <i class="material-icons open-search">search</i>
                </button>
            </form>
        </div>
        <nav class="mobile-nav">
            <ul class="mobile-menu-list">
                <li>
                    <a href="{{ route('landing.home') }}">Beranda</a>
                </li>
                <li class="drop-link">
                    <a href="{{ route('landing.books') }}">Koleksi Buku</a>
                    <ul class="mobile-dropdown">
                        <li><a href="{{ route('landing.books') }}?sortBy=created_at&sortDirection=desc">Buku
                                Terbaru</a></li>
                        <li><a href="{{ route('landing.books') }}?sortBy=stok&sortDirection=asc">Buku Populer</a></li>
                        <li>
                            <hr>
                        </li>
                        <li><strong>Kategori Buku</strong></li>
                        @foreach ($navbarCategories as $category)
                            <li><a
                                    href="{{ route('landing.books') }}?category={{ $category->id }}">{{ $category->name }}</a>
                            </li>
                        @endforeach
                        <li>
                            <hr>
                        </li>
                        <li><a href="{{ route('landing.books') }}">Semua Kategori</a></li>
                    </ul>
                </li>
                <li>
                    <a href="{{ route('landing.about') }}">Tentang Kami</a>
                </li>
                @auth
                    @if (auth()->user()->isSiswa())
                        <li>
                            <a href="{{ route('siswa.books.loans.history') }}">Riwayat Peminjaman</a>
                        </li>
                    @endif
                @endauth
                @auth

                @endauth

            </ul>
            @auth
                <div style="background: #212529 !important">
                    <nav class="navbar" style="background: #212529 !important">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdownx nav-profile">
                                <a class="nav-link dropdown-toggle" href="#" id="profileDropdownMobile"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    @if (Auth::user()->gambar == null)
                                        <img src="/DB/assets/images/admin/0.png"
                                            style="width: 30px; height: 30px; border-radius: 50%; background: white !important"
                                            alt="">
                                    @else
                                        <img src="{{ asset('storage/' . Auth::user()->gambar) }}" alt="profile"
                                            style="width: 30px; height: 30px; border-radius: 50%; background: white !important">
                                    @endif
                                </a>
                                <div class="dropdown-menu" aria-labelledby="profileDropdownMobile"
                                    style="right: -100px; left: auto; transform: translateX(5px);">
                                    <div class="dropdown-header d-flex flex-column align-items-center">
                                        <div class="figure mb-3">
                                            @if (Auth::user()->gambar == null)
                                                <img src="/DB/assets/images/admin/0.png"
                                                    style="width: 30px; height: 30px; border-radius: 50%;" alt="">
                                            @else
                                                <img src="{{ asset('storage/' . Auth::user()->gambar) }}"
                                                    style="width: 30px; height: 30px; border-radius: 50%;" alt="profile">
                                            @endif
                                        </div>
                                        <div class="info text-center">
                                            <p class="name font-weight-bold mb-0">{{ Auth::user()->name }}</p>
                                            <p class="email text-muted mb-3">{{ Auth::user()->email }}</p>
                                        </div>
                                    </div>
                                    <div class="dropdown-body">
                                        <ul class="profile-nav p-0 pt-3">
                                            <li class="nav-item">
                                                <a href="/profile" class="nav-link">
                                                    <i data-feather="edit"></i>
                                                    <span>Edit Profile</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <form action="{{ route('logout') }}" method="POST">
                                                    @csrf
                                                    <button class="nav-link border-0 bg-transparent" type="submit">
                                                        <i data-feather="log-out"></i>
                                                        <span>Log Out</span>
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                @if (auth()->user()->role === 'admin')
                    <a href="/dashboard/books" class="register-modal-opener login-button"
                        style="background-color: #52843e; color: #fff; margin-right: 20px;"> Dashboard</a>
                @endif

                {{-- <form method="POST" action="{{ route('logout') }}" style="display: inline;">
                    @csrf
                    <button type="submit" class="register-modal-opener login-button"
                        style="background-color: #ff0000; color: #fff; border: none; cursor: pointer;">
                        <i class="material-icons">exit_to_app</i> Logout
                    </button>
                </form> --}}
            @else
                <a href="{{ route('login') }}" class="register-modal-opener login-button"><i
                        class="material-icons">perm_identity</i> Masuk</a>
            @endauth
            </ul>
        </nav>
    </div>

</header>
