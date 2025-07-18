		<!-- partial:partials/_sidebar.html -->
        <nav class="sidebar">
            <div class="sidebar-header">
              <a href="/" class="sidebar-brand">
                <img src="/DB/assets/images/logo4.png" width="140px" alt="">
              </a>
              <div class="sidebar-toggler not-active">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="sidebar-body">
              <ul class="nav">
        
                </li>
                <li class="nav-item nav-category">Perpustakaan</li>
                <li class="nav-item">
                  <a href="{{ route('books.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="book"></i>
                    <span class="link-title">Pengelolaan Buku</span>
                  </a>
                </li>
                <li class="nav-item nav-category">DATA</li>
                <li class="nav-item">
                  <a href="/dashboard/loans" class="nav-link">
                    <i class="link-icon" data-feather="briefcase"></i>
                    <span class="link-title">Data Peminjaman</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/dashboard/returns" class="nav-link">
                    <i class="link-icon" data-feather="briefcase"></i>
                    <span class="link-title">Data Pengembalian</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/dashboard/fines" class="nav-link">
                    <i class="link-icon" data-feather="briefcase"></i>
                    <span class="link-title">Data Denda</span>
                  </a>
                </li>
          
                <li class="nav-item nav-category">Anggota</li>
                <li class="nav-item">
                  <a href="/dashboard/users" class="nav-link">
                    <i class="link-icon" data-feather="users"></i>
                    <span class="link-title">Pengelolaan Anggota</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/dashboard/admins" class="nav-link">
                    <i class="link-icon" data-feather="users"></i>
                    <span class="link-title">Pengelolaan Admin</span>
                  </a>
                </li>

              </ul>
            </div>
          </nav>
          
      
              <!-- partial -->