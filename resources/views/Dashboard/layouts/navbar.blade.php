<nav class="navbar">
    <a href="#" class="sidebar-toggler">
        <i data-feather="menu"></i>
    </a>
    <div class="navbar-content">

        <ul class="navbar-nav">
            <li class="nav-item dropdown nav-profile">
                <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    @if (Auth::user()->gambar == null)
                        <img src="/DB/assets/images/admin/0.png" alt="">
                    @else
                        <img src="{{ asset('storage/' . Auth::user()->gambar) }}" alt="profile">
                    @endif
                </a>
                <div class="dropdown-menu" aria-labelledby="profileDropdown">
                    <div class="dropdown-header d-flex flex-column align-items-center">
                        <div class="figure mb-3">
                            @if (Auth::user()->gambar == null)
                                <img src="/DB/assets/images/admin/0.png" alt="">
                            @else
                                <img src="{{ asset('storage/' . Auth::user()->gambar) }}" alt="profile">
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
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>