@extends('LandingPage.layouts.main')

@section('title', 'Tentang Kami - SMP Muhammadiyah Karangasem')

@section('css')
<style>
    /* Styles untuk halaman about */
    .about-hero {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('{{ asset('sekolah.jpg') }}');
        background-size: cover;
        background-position: center;
        padding: 120px 0;
        position: relative;
        color: #fff;
        text-align: center;
    }

    .about-hero h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    .about-hero p {
        font-size: 18px;
        max-width: 700px;
        margin: 0 auto 30px;
        line-height: 1.6;
    }

    .about-breadcrumb {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .about-breadcrumb li {
        font-size: 16px;
        padding: 0 15px;
        position: relative;
    }

    .about-breadcrumb li:not(:last-child):after {
        content: '/';
        position: absolute;
        right: -5px;
        top: 0;
        color: #ccc;
    }

    .about-breadcrumb a {
        color: #fff;
        transition: all 0.3s;
    }

    .about-breadcrumb a:hover {
        color: #0d6efd;
    }

    .about-section {
        padding: 80px 0;
    }

    .section-title {
        position: relative;
        margin-bottom: 60px;
        text-align: center;
    }

    .section-title h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 20px;
        position: relative;
        display: inline-block;
        padding-bottom: 20px;
    }

    .section-title h2:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #0d6efd;
    }

    .section-title p {
        font-size: 18px;
        color: #666;
        max-width: 700px;
        margin: 0 auto;
    }

    .history-timeline {
        position: relative;
        max-width: 1200px;
        margin: 50px auto;
    }

    .history-timeline::before {
        content: '';
        position: absolute;
        width: 2px;
        background: #e9ecef;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -1px;
    }

    .timeline-item {
        padding: 15px 30px;
        position: relative;
        width: 50%;
        background: #fff;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .timeline-item:nth-child(odd) {
        left: 0;
    }

    .timeline-item:nth-child(even) {
        left: 50%;
    }

    .timeline-item::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background: #0d6efd;
        top: 30px;
        border-radius: 50%;
        z-index: 1;
        box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.2);
    }

    .timeline-item:nth-child(even)::after {
        left: -8px;
    }

    .timeline-date {
        display: inline-block;
        padding: 5px 15px;
        background: #0d6efd;
        color: #fff;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .timeline-content h3 {
        margin: 10px 0 15px;
        font-size: 22px;
        font-weight: 600;
        color: #333;
    }

    .timeline-content p {
        margin: 0;
        color: #666;
        line-height: 1.6;
    }

    .vm-section {
        background-color: #f8f9fa;
        padding: 80px 0;
    }

    .vm-box {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        transition: all 0.3s;
        margin-bottom: 30px;
    }

    .vm-box:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }

    .vm-header {
        background: #0d6efd;
        color: #fff !important;
        padding: 25px 30px;
        position: relative;
    }

    .vm-header h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        display: flex;
        align-items: center;
        color: #fff !important;
    }

    .vm-header h3 i {
        margin-right: 15px;
        font-size: 30px;
    }

    .vm-content {
        padding: 30px;
    }

    .vm-content p {
        color: #666;
        line-height: 1.7;
        margin-bottom: 20px;
    }

    .vm-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .vm-list li {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: flex-start;
        color: #555;
    }

    .vm-list li:last-child {
        border-bottom: none;
    }

    .vm-list li i {
        color: #0d6efd;
        margin-right: 10px;
        font-size: 16px;
        margin-top: 4px;
    }

    .facilities-section {
        padding: 80px 0;
    }

    .facility-item {
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .facility-image {
        position: relative;
        height: 250px;
        overflow: hidden;
    }

    .facility-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
    }

    .facility-item:hover .facility-image img {
        transform: scale(1.1);
    }

    .facility-content {
        padding: 20px;
        background: #fff;
    }

    .facility-content h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
    }

    .facility-content p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }

    .stat-section {
        background: linear-gradient(rgba(13, 110, 253, 0.9), rgba(13, 110, 253, 0.9)), url('{{ asset('LP/upload/about/stat-bg.jpg') }}');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding: 80px 0;
        color: #fff;
        text-align: center;
    }

    .stat-counter {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .stat-title {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .stat-box {
        background: rgba(255, 255, 255, 0.1);
        padding: 30px;
        border-radius: 10px;
        transition: all 0.3s;
    }

    .stat-box:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-5px);
    }

    .team-section {
        padding: 80px 0;
    }

    .team-member {
        margin-bottom: 30px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s;
    }

    .team-member:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    }

    .team-image {
        position: relative;
        overflow: hidden;
    }

    .team-image img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .team-content {
        padding: 20px;
        text-align: center;
    }

    .team-content h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #333;
    }

    .team-position {
        color: #0d6efd;
        font-weight: 600;
        margin-bottom: 15px;
        display: block;
    }

    @media (max-width: 991px) {
        .history-timeline::before {
            left: 31px;
        }

        .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        .timeline-item:nth-child(odd),
        .timeline-item:nth-child(even) {
            left: 0;
        }

        .timeline-item::after {
            left: 18px;
            right: auto;
        }
    }
</style>
@endsection

@section('content')
<!-- Hero Section -->
<section class="about-hero">
    <div class="container">
        <h1 style="color: white;">Tentang Kami</h1>
        <p style="color: white;">Mengenal lebih dekat SMP Muhammadiyah Karangasem, sejarah, visi, misi, dan berbagai fasilitas yang kami miliki untuk mendukung pendidikan berkualitas.</p>
        <ul class="about-breadcrumb">
            <li><a href="{{ route('landing.home') }}">Beranda</a></li>
            <li>Tentang Kami</li>
        </ul>
    </div>
</section>

<!-- Sejarah Section -->
<section class="about-section">
    <div class="container">
        <div class="section-title">
            <h2>Sejarah Kami</h2>
            <p>Perjalanan panjang SMP Muhammadiyah Karangasem dalam mencerdaskan anak bangsa dan membentuk generasi muslim yang berakhlak mulia.</p>
        </div>

        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-date">1978</div>
                <div class="timeline-content">
                    <h3>Pendirian Sekolah</h3>
                    <p>SMP Muhammadiyah Karangasem didirikan oleh Pimpinan Cabang Muhammadiyah Karang Asem sebagai bentuk kepedulian terhadap pendidikan Islam di wilayah Karangasem dan sekitarnya.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">1985</div>
                <div class="timeline-content">
                    <h3>Pembangunan Gedung Pertama</h3>
                    <p>Sekolah membangun gedung pertama yang terdiri dari 6 ruang kelas, ruang guru, dan laboratorium sederhana untuk menunjang kegiatan pembelajaran.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">1995</div>
                <div class="timeline-content">
                    <h3>Pengembangan Fasilitas</h3>
                    <p>Penambahan fasilitas baru termasuk perpustakaan, laboratorium IPA, dan ruang komputer untuk meningkatkan kualitas pendidikan.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2005</div>
                <div class="timeline-content">
                    <h3>Akreditasi B</h3>
                    <p>SMP Muhammadiyah Karangasem berhasil mendapatkan akreditasi B dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) sebagai bukti kualitas pendidikan yang baik.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2020</div>
                <div class="timeline-content">
                    <h3>Digitalisasi Pembelajaran</h3>
                    <p>Pengembangan sistem pembelajaran digital termasuk perpustakaan digital untuk mendukung adaptasi terhadap perkembangan teknologi dan pendidikan di era digital.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Visi & Misi Section -->
<section class="vm-section">
    <div class="container">
        <div class="section-title">
            <h2>Visi & Misi</h2>
            <p>Landasan dan arah pengembangan sekolah untuk mencapai tujuan pendidikan yang berkualitas dan Islami.</p>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="vm-box">
                    <div class="vm-header">
                        <h3><i class="fa fa-eye"></i> Visi</h3>
                    </div>
                    <div class="vm-content">
                        <p><strong>"Menjadi pusat pendidikan Islam terkemuka yang menghasilkan lulusan beriman, bertaqwa, berakhlak mulia, dan unggul dalam prestasi akademik maupun non-akademik."</strong></p>
                        <p>Visi ini menggambarkan cita-cita sekolah untuk menjadi lembaga pendidikan yang tidak hanya unggul dalam prestasi akademik, tetapi juga mampu membentuk karakter Islami yang kuat pada setiap siswa.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="vm-box">
                    <div class="vm-header">
                        <h3><i class="fa fa-bullseye"></i> Misi</h3>
                    </div>
                    <div class="vm-content">
                        <p>Untuk mencapai visi tersebut, SMP Muhammadiyah Karang Asem memiliki misi sebagai berikut:</p>
                        <ul class="vm-list">
                            <li><i class="fa fa-check-circle"></i> Menyelenggarakan pendidikan Islam yang berkualitas dan berlandaskan Al-Qur'an dan Sunnah.</li>
                            <li><i class="fa fa-check-circle"></i> Membina karakter dan akhlak mulia sesuai dengan nilai-nilai Islam yang rahmatan lil alamin.</li>
                            <li><i class="fa fa-check-circle"></i> Mengembangkan potensi peserta didik melalui pembelajaran yang inovatif dan kreatif.</li>
                            <li><i class="fa fa-check-circle"></i> Membekali peserta didik dengan keterampilan hidup dan kemampuan teknologi yang relevan dengan perkembangan zaman.</li>
                            <li><i class="fa fa-check-circle"></i> Menciptakan lingkungan belajar yang kondusif untuk mendukung proses pembelajaran yang efektif.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Facilities Section -->
<section class="facilities-section">
    <div class="container">
        <div class="section-title">
            <h2>Fasilitas Sekolah</h2>
            <p>Berbagai fasilitas untuk mendukung proses belajar mengajar dan pengembangan potensi siswa.</p>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('perpus.png') }}" alt="Perpustakaan">
                    </div>
                    <div class="facility-content">
                        <h3>Perpustakaan</h3>
                        <p>Koleksi buku lengkap dengan sistem perpustakaan digital untuk memudahkan siswa mengakses berbagai sumber pengetahuan.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('ipa2.jpg') }}" alt="Laboratorium IPA">
                    </div>
                    <div class="facility-content">
                        <h3>Laboratorium IPA</h3>
                        <p>Dilengkapi peralatan eksperimen modern untuk mendukung pembelajaran praktik dalam bidang sains.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('komputer.png') }}" alt="Laboratorium Komputer">
                    </div>
                    <div class="facility-content">
                        <h3>Laboratorium Komputer</h3>
                        <p>Ruang komputer dengan perangkat terbaru untuk pembelajaran teknologi informasi dan komunikasi.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('ibadah.png') }}" alt="Masjid Sekolah">
                    </div>
                    <div class="facility-content">
                        <h3>Tempat Ibadah Sekolah</h3>
                        <p>Tempat ibadah yang nyaman untuk kegiatan keagamaan dan pembinaan spiritual siswa.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('olahraga.png') }}" alt="Fasilitas Olahraga">
                    </div>
                    <div class="facility-content">
                        <h3>Fasilitas Olahraga</h3>
                        <p>Lapangan olahraga multifungsi untuk kegiatan pembelajaran dan ekstrakurikuler dibidang olahraga.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="facility-item">
                    <div class="facility-image">
                        <img src="{{ asset('ruang-kelas.jpg') }}" alt="Ruang Kelas">
                    </div>
                    <div class="facility-content">
                        <h3>Ruang Kelas</h3>
                        <p>Ruang kelas yang nyaman dilengkapi dengan teknologi pendukung pembelajaran.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
{{-- <section class="team-section">
    <div class="container">
        <div class="section-title">
            <h2>Jajaran Pimpinan</h2>
            <p>Para pendidik berdedikasi yang memimpin SMP Muhammadiyah Karang Asem.</p>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div class="team-image">
                        <img src="{{ asset('LP/upload/team/principal.jpg') }}" alt="Kepala Sekolah">
                    </div>
                    <div class="team-content">
                        <h3>Drs. Ahmad Syafii</h3>
                        <span class="team-position">Kepala Sekolah</span>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div class="team-image">
                        <img src="{{ asset('LP/upload/team/vice-curriculum.jpg') }}" alt="Wakil Kepala Kurikulum">
                    </div>
                    <div class="team-content">
                        <h3>Hj. Siti Aminah, M.Pd</h3>
                        <span class="team-position">Wakil Kepala Kurikulum</span>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div class="team-image">
                        <img src="{{ asset('LP/upload/team/vice-student.jpg') }}" alt="Wakil Kepala Kesiswaan">
                    </div>
                    <div class="team-content">
                        <h3>H. Mahmud Fauzi, S.Pd</h3>
                        <span class="team-position">Wakil Kepala Kesiswaan</span>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div class="team-image">
                        <img src="{{ asset('LP/upload/team/vice-facility.jpg') }}" alt="Wakil Kepala Sarana Prasarana">
                    </div>
                    <div class="team-content">
                        <h3>Muhammad Ridwan, S.T</h3>
                        <span class="team-position">Wakil Kepala Sarana Prasarana</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --}}
@endsection
