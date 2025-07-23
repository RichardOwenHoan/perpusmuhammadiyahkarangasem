@extends('LandingPage.layouts.main')

@section('title', 'Perpustakaan SMP Muhammadiyah Karangasem')

@section('css')
<style>
    .custom-slider .tp-caption {
        text-align: center;
    }

    /* Style untuk bagian tentang sekolah */
    .about-preview-section {
        background-color: #f8f9fa;
        padding: 70px 0;
        position: relative;
        overflow: hidden;
    }

    .about-preview-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('{{ asset('LP/upload/pattern-bg.png') }}') repeat;
        opacity: 0.1;
    }

    .about-preview-content {
        display: flex;
        align-items: center;
    }

    .about-preview-image {
        flex: 0 0 45%;
        position: relative;
    }

    .about-preview-image img {
        border-radius: 10px;
        box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }

    .about-preview-image:hover img {
        transform: translateY(-8px);
        box-shadow: 0 20px 35px rgba(0,0,0,0.2);
    }

    .about-preview-text {
        flex: 0 0 55%;
        padding-left: 50px;
    }

    .about-preview-title {
        position: relative;
        padding-bottom: 15px;
        margin-bottom: 25px;
    }

    .about-preview-title h4 {
        font-size: 18px;
        color: #0d6efd;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .about-preview-title h2 {
        font-size: 32px;
        font-weight: 700;
        color: #333;
    }

    .about-preview-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 3px;
        background: #0d6efd;
    }

    .vision-mission-box {
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
    }

    .vision-mission-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    .vision-mission-box h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #333;
        display: flex;
        align-items: center;
    }

    .vision-mission-box h3 i {
        margin-right: 10px;
        color: #0d6efd;
        font-size: 24px;
    }

    .vision-mission-box p {
        color: #666;
        line-height: 1.6;
    }

    .about-cta {
        margin-top: 30px;
    }

    .btn-about {
        padding: 12px 30px;
        border-radius: 30px;
        background: #0d6efd;
        color: #fff;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
    }

    .btn-about:hover {
        background: #0a58ca;
        color: #fff;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
    }

    @media (max-width: 991px) {
        .about-preview-content {
            flex-direction: column;
        }

        .about-preview-image {
            flex: 0 0 100%;
            margin-bottom: 30px;
        }

        .about-preview-text {
            flex: 0 0 100%;
            padding-left: 0;
        }
    }
</style>
@endsection

@section('content')
<!-- home-section -->
<section id="home-section">
    <div id="rev_slider_202_1_wrapper" class="rev_slider_wrapper" data-alias="concept1" style="background-color:#000000;padding:0px;">
        <!-- START REVOLUTION SLIDER 5.1.1RC fullscreen mode -->
        <div id="rev_slider_202_1" class="rev_slider" data-version="5.1.1RC">
            <ul>
                <!-- SLIDE 1 -->
                <li data-index="rs-672" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="{{ asset('LP/upload/slider/slider-image-1.jpg') }}" data-rotate="0" data-saveperformance="off" data-title="unique" data-description="">
                    <!-- MAIN IMAGE -->
                    <img src="{{ asset('sekolah.jpg') }}" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina>

                    <!-- LAYERS -->
                    <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                        id="slide-672-layer-1"
                        data-x="['left','left','left','left']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['top','top','top','top']"
                        data-voffset="['130','130','130','130']"
                        data-width="['530','530','430','420']"
                        data-height="330"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        style="z-index: 5;background-color:rgba(255, 255, 255, 1.00);border-color:rgba(0, 0, 0, 0);">
                    </div>

                    <div class="tp-caption Woo-TitleLarge tp-resizeme"
                        id="slide-672-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','35']"
                        data-y="['top','top','top','top']"
                        data-voffset="['170','170','170','170']"
                        data-width="450"
                        data-height="none"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        data-start="1000"
                        style="z-index: 6; min-width: 370px; max-width: 450px; white-space: normal;text-align:left;">
                        Perpustakaan Buku Kami
                    </div>

                    <div class="tp-caption Woo-Rating tp-resizeme"
                        id="slide-672-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','35']"
                        data-y="['top','top','top','top']"
                        data-voffset="['286','286','286','286']"
                        data-width="450"
                        data-height="none"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        data-start="1500"
                        style="z-index: 8; min-width: 370px; max-width: 450px; white-space: normal; text-align:left;">
                        Akses ribuan buku digital dan cetak untuk mendukung pembelajaran dan literasi siswa.
                    </div>

                    <a class="tp-caption Woo-ProductInfo rev-btn tp-resizeme"
                        href="{{ route('landing.books') }}"
                        target="_self"
                        id="slide-672-layer-6"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','35']"
                        data-y="['top','top','top','top']"
                        data-voffset="['370','370','370','370']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        data-start="2000"
                        style="z-index: 10;">
                        Jelajahi Koleksi
                    </a>
                </li>

                <!-- SLIDE 2 -->
                <li data-index="rs-673" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="{{ asset('LP/upload/slider/slider-image-2.jpg') }}" data-rotate="0" data-saveperformance="off" data-title="ideas" data-description="">
                    <!-- MAIN IMAGE -->
                    <img src="{{ asset('sekolah2.jpg') }}" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina>

                    <!-- LAYERS -->
                    <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                        id="slide-673-layer-1"
                        data-x="['left','left','left','left']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['top','top','top','top']"
                        data-voffset="['130','130','130','130']"
                        data-width="['530','530','430','420']"
                        data-height="330"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        style="z-index: 5;background-color:rgba(255, 255, 255, 1.00);border-color:rgba(0, 0, 0, 0);">
                    </div>

                    <div class="tp-caption Woo-TitleLarge tp-resizeme"
                        id="slide-673-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','35']"
                        data-y="['top','top','top','top']"
                        data-voffset="['170','170','170','170']"
                        data-width="450"
                        data-height="none"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        data-start="1000"
                        style="z-index: 6; min-width: 370px; max-width: 450px; white-space: normal;text-align:left;">
                        Peminjaman Buku<br>Mudah dan Cepat
                    </div>

                    <div class="tp-caption Woo-Rating tp-resizeme"
                        id="slide-673-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','35']"
                        data-y="['top','top','top','top']"
                        data-voffset="['286','286','286','286']"
                        data-width="450"
                        data-height="none"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                        data-start="1500"
                        style="z-index: 8; min-width: 370px; max-width: 450px; white-space: normal; text-align:left;">
                        Sistem peminjaman dan pengembalian buku yang terintegrasi memudahkan akses ke pengetahuan.
                    </div>

                    <a class="tp-caption Woo-ProductInfo rev-btn tp-resizeme"
                    href="{{ route('landing.books') }}"
                    target="_self"
                    id="slide-672-layer-6"
                    data-x="['left','left','left','left']"
                    data-hoffset="['40','40','40','35']"
                    data-y="['top','top','top','top']"
                    data-voffset="['370','370','370','370']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeOut;"
                    data-start="2000"
                    style="z-index: 10;">
                    Jelajahi Koleksi
                </a>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- End home section -->

<!-- feature-section -->
<section class="feature-section">
    <div class="container">
        <div class="feature-box">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="feature-post">
                        <div class="icon-holder">
                            <i class="fa fa-book"></i>
                        </div>
                        <div class="feature-content">
                            <h2>
                                Koleksi Buku Lengkap
                            </h2>
                            <p>Ribuan koleksi buku dari berbagai kategori untuk mendukung pembelajaran dan mengembangkan pengetahuan siswa.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-post">
                        <div class="icon-holder color2">
                            <i class="fa fa-tablet"></i>
                        </div>
                        <div class="feature-content">
                            <h2>
                                Akses Digital
                            </h2>
                            <p>Akses perpustakaan kapan saja dan dimana saja melalui sistem digital yang terintegrasi dengan layanan perpustakaan.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-post">
                        <div class="icon-holder color3">
                            <i class="fa fa-users"></i>
                        </div>
                        <div class="feature-content">
                            <h2>
                                Dukungan Staf Perpustakaan
                            </h2>
                            <p>Staf perpustakaan yang profesional dan siap membantu siswa menemukan buku dan referensi yang dibutuhkan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End feature section -->

<!-- collection-section -->
{{-- <section class="collection-section">
    <div class="container">
        <div class="title-section">
            <div class="left-part">
                <span>Kategori</span>
                <h1>Koleksi Populer</h1>
            </div>
            <div class="right-part">
                <a class="button-one" href="#">Lihat Semua Buku</a>
            </div>
        </div>
        <div class="collection-box">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="collection-post">
                        <div class="inner-collection">
                            <img src="{{ asset('LP/upload/collection/web-development.jpg') }}" alt="">
                            <a href="#" class="hover-post">
                                <span class="title">Buku Pelajaran</span>
                                <span class="numb-courses">150+ Buku</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="collection-post">
                        <div class="inner-collection">
                            <img src="{{ asset('LP/upload/collection/web-design.jpg') }}" alt="">
                            <a href="#" class="hover-post">
                                <span class="title">Buku Islami</span>
                                <span class="numb-courses">75+ Buku</span>
                            </a>
                        </div>
                    </div>
                    <div class="collection-post">
                        <div class="inner-collection">
                            <img src="{{ asset('LP/upload/collection/technology.jpg') }}" alt="">
                            <a href="#" class="hover-post">
                                <span class="title">Teknologi</span>
                                <span class="numb-courses">30+ Buku</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="collection-post">
                        <div class="inner-collection">
                            <img src="{{ asset('LP/upload/collection/photography.jpg') }}" alt="">
                            <a href="#" class="hover-post">
                                <span class="title">Novel & Fiksi</span>
                                <span class="numb-courses">50+ Buku</span>
                            </a>
                        </div>
                    </div>
                    <div class="collection-post">
                        <div class="inner-collection">
                            <img src="{{ asset('LP/upload/collection/design.jpg') }}" alt="">
                            <a href="#" class="hover-post">
                                <span class="title">Ensiklopedia</span>
                                <span class="numb-courses">25+ Buku</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --}}
<!-- End collection section -->

{{-- <!-- popular-courses-section -->
<section class="popular-courses-section">
    <div class="container">
        <div class="title-section">
            <div class="left-part">
                <span>Rekomendasi</span>
                <h1>Buku Populer</h1>
            </div>
            <div class="right-part">
                <a class="button-one" href="#">Lihat Semua Buku</a>
            </div>
        </div>
        <div class="popular-courses-box">
            <div class="row">
                <!-- Buku 1 -->
                <div class="col-lg-3 col-md-6">
                    <div class="course-post">
                        <div class="course-thumbnail-holder">
                            <a href="#">
                                <img src="{{ asset('LP/upload/courses/1.jpg') }}" alt="">
                            </a>
                        </div>
                        <div class="course-content-holder">
                            <div class="course-content-main">
                                <h2 class="course-title">
                                    <a href="#">Matematika Kelas 7</a>
                                </h2>
                                <div class="course-rating-teacher">
                                    <div class="star-rating has-ratings" title="Rated 5.00 out of 5">
                                        <span style="width:100%">
                                            <span class="rating">5.00</span>
                                            <span class="votes-number">25 Votes</span>
                                        </span>
                                    </div>
                                    <a href="#" class="course-loop-teacher">Kementerian Pendidikan</a>
                                </div>
                            </div>
                            <div class="course-content-bottom">
                                <div class="course-students">
                                    <i class="material-icons">group</i>
                                    <span>64</span>
                                </div>
                                <div class="course-price">
                                    <span>Tersedia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Buku 2 -->
                <div class="col-lg-3 col-md-6">
                    <div class="course-post">
                        <div class="course-thumbnail-holder">
                            <a href="#">
                                <img src="{{ asset('LP/upload/courses/2.jpg') }}" alt="">
                            </a>
                        </div>
                        <div class="course-content-holder">
                            <div class="course-content-main">
                                <h2 class="course-title">
                                    <a href="#">Aqidah Akhlak</a>
                                </h2>
                                <div class="course-rating-teacher">
                                    <div class="star-rating has-ratings" title="Rated 4.5 out of 5">
                                        <span style="width:90%">
                                            <span class="rating">4.50</span>
                                            <span class="votes-number">15 Votes</span>
                                        </span>
                                    </div>
                                    <a href="#" class="course-loop-teacher">Ahmad Dahlan</a>
                                </div>
                            </div>
                            <div class="course-content-bottom">
                                <div class="course-students">
                                    <i class="material-icons">group</i>
                                    <span>32</span>
                                </div>
                                <div class="course-price">
                                    <span>Tersedia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Buku 3 -->
                <div class="col-lg-3 col-md-6">
                    <div class="course-post">
                        <div class="course-thumbnail-holder">
                            <a href="#">
                                <img src="{{ asset('LP/upload/courses/3.jpg') }}" alt="">
                            </a>
                        </div>
                        <div class="course-content-holder">
                            <div class="course-content-main">
                                <h2 class="course-title">
                                    <a href="#">Ilmu Pengetahuan Alam</a>
                                </h2>
                                <div class="course-rating-teacher">
                                    <div class="star-rating has-ratings" title="Rated 4.0 out of 5">
                                        <span style="width:80%">
                                            <span class="rating">4.00</span>
                                            <span class="votes-number">12 Votes</span>
                                        </span>
                                    </div>
                                    <a href="#" class="course-loop-teacher">Dr. Sutrisno</a>
                                </div>
                            </div>
                            <div class="course-content-bottom">
                                <div class="course-students">
                                    <i class="material-icons">group</i>
                                    <span>28</span>
                                </div>
                                <div class="course-price">
                                    <span>Tersedia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Buku 4 -->
                <div class="col-lg-3 col-md-6">
                    <div class="course-post">
                        <div class="course-thumbnail-holder">
                            <a href="#">
                                <img src="{{ asset('LP/upload/courses/4.jpg') }}" alt="">
                            </a>
                        </div>
                        <div class="course-content-holder">
                            <div class="course-content-main">
                                <h2 class="course-title">
                                    <a href="#">Sejarah Indonesia</a>
                                </h2>
                                <div class="course-rating-teacher">
                                    <div class="star-rating has-ratings" title="Rated 4.0 out of 5">
                                        <span style="width:80%">
                                            <span class="rating">4.00</span>
                                            <span class="votes-number">10 Votes</span>
                                        </span>
                                    </div>
                                    <a href="#" class="course-loop-teacher">Prof. Kuntowijoyo</a>
                                </div>
                            </div>
                            <div class="course-content-bottom">
                                <div class="course-students">
                                    <i class="material-icons">group</i>
                                    <span>20</span>
                                </div>
                                <div class="course-price">
                                    <span>Tersedia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End popular-courses section --> --}}

<!-- about-preview-section -->
<section class="about-preview-section">
    <div class="container">
        <div class="about-preview-content">
            <div class="about-preview-image">
                <img src="{{ asset('sekolah.jpg') }}" alt="SMP Muhammadiyah Karang Asem" class="img-fluid">
            </div>
            <div class="about-preview-text">
                <div class="about-preview-title">
                    <h4>Selamat Datang di</h4>
                    <h2>SMP Muhammadiyah Karang Asem</h2>
                </div>

                <p>SMP Muhammadiyah Karang Asem adalah lembaga pendidikan Islam yang berdedikasi untuk membentuk generasi muslim yang berakhlak mulia, cerdas dan berwawasan luas. Didirikan pada tahun 1978, sekolah kami telah berkontribusi dalam mencerdaskan kehidupan bangsa selama lebih dari empat dekade.</p>

                <div class="vision-mission-box">
                    <h3><i class="fa fa-eye"></i> Visi</h3>
                    <p>Menjadi pusat pendidikan Islam terkemuka yang menghasilkan lulusan beriman, bertaqwa, berakhlak mulia, dan unggul dalam prestasi akademik maupun non-akademik.</p>
                </div>

                <div class="vision-mission-box">
                    <h3><i class="fa fa-bullseye"></i> Misi</h3>
                    <p>Menyelenggarakan pendidikan Islam berkualitas, membina karakter dan akhlak mulia, serta mengembangkan potensi peserta didik melalui pembelajaran inovatif dan kreatif.</p>
                </div>

                {{--  <div class="about-cta">
                    <a href="{{ route('landing.about') }}" class="btn-about">Selengkapnya <i class="fa fa-arrow-right ml-2"></i></a>
                </div>  --}}
            </div>
        </div>
    </div>
</section>
<!-- End about-preview-section -->

<!-- testimonial-section -->
{{-- <section class="testimonial-section">
    <div class="container">
        <div class="testimonial-box owl-wrapper">
            <div class="owl-carousel" data-num="1">
                <div class="item">
                    <div class="testimonial-post">
                        <p>"Perpustakaan SMP Muhammadiyah Karang Asem sangat membantu saya dalam belajar. Koleksi bukunya lengkap dan sistem peminjaman digitalnya sangat memudahkan."</p>
                        <div class="profile-test">
                            <div class="avatar-holder">
                                <img src="{{ asset('LP/upload/testimonials/testimonial-avatar-1.jpg') }}" alt="">
                            </div>
                            <div class="profile-data">
                                <h2>Anisa Rahma</h2>
                                <p>Siswa Kelas 8</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="testimonial-post">
                        <p>"Sebagai guru, saya merasa terbantu dengan adanya perpustakaan digital ini. Siswa lebih mudah mengakses sumber belajar dan membantu meningkatkan minat baca mereka."</p>
                        <div class="profile-test">
                            <div class="avatar-holder">
                                <img src="{{ asset('LP/upload/testimonials/testimonial-avatar-2.jpg') }}" alt="">
                            </div>
                            <div class="profile-data">
                                <h2>Bapak Hendra</h2>
                                <p>Guru Matematika</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="testimonial-post">
                        <p>"Sistem peminjaman buku yang cepat dan mudah membuat saya senang berkunjung ke perpustakaan. Staf perpustakaannya juga sangat membantu dan ramah."</p>
                        <div class="profile-test">
                            <div class="avatar-holder">
                                <img src="{{ asset('LP/upload/testimonials/testimonial-avatar-3.jpg') }}" alt="">
                            </div>
                            <div class="profile-data">
                                <h2>Ahmad Fauzi</h2>
                                <p>Siswa Kelas 9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --}}
<!-- End testimonial section -->
@endsection

@section('js')
<script>
var tpj=jQuery;
var revapi202;
tpj(document).ready(function() {
    if (tpj("#rev_slider_202_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_202_1");
    } else {
        revapi202 = tpj("#rev_slider_202_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "{{ asset('LP/js/') }}/",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'gyges',
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: -60
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: -60
                    }
                },
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                bullets: {
                    enable: false,
                    style: 'persephone',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,
                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 55,
                    space: 7,
                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200
                }
            },
            responsiveLevels: [1210, 1024, 778, 480],
            visibilityLevels: [1210, 1024, 778, 480],
            gridwidth: [1210, 1024, 778, 480],
            gridheight: [700, 700, 600, 600],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});
</script>
@endsection
