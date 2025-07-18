<!doctype html>
<html lang="en" class="no-js">
<head>
    <title>@yield('title', 'Perpustakaan SMP Muhammadiyah Karang Asem')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,500i,600,700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="{{ asset('LP/assets/css/studiare-assets.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('LP/assets/css/fonts/font-awesome/font-awesome.min.css') }}" media="screen">
    <link rel="stylesheet" type="text/css" href="{{ asset('LP/assets/css/fonts/elegant-icons/style.css') }}" media="screen">
    <link rel="stylesheet" type="text/css" href="{{ asset('LP/assets/css/fonts/iconfont/material-icons.css') }}" media="screen">
    <link rel="stylesheet" type="text/css" href="{{ asset('LP/assets/css/style.css') }}">


    @yield('css')
</head>
<body>

    <!-- Container -->
    <div id="container">
        <!-- Header -->
        @include('LandingPage.layouts.partial.navbar')
        <!-- End Header -->

        @yield('content')

        <!-- Footer -->
        @include('LandingPage.layouts.partial.footer')
        <!-- End Footer -->
    </div>
    <!-- End Container -->

    <script src="{{ asset('LP/assets/js/studiare-plugins.min.js') }}"></script>
    <script src="{{ asset('LP/assets/js/jquery.countTo.js') }}"></script>
    <script src="{{ asset('LP/assets/js/popper.js') }}"></script>
    <script src="{{ asset('LP/assets/js/bootstrap.min.js') }}"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyCiqrIen8rWQrvJsu-7f4rOta0fmI5r2SI&amp;sensor=false&amp;language=en"></script>
    <script src="{{ asset('LP/assets/js/gmap3.min.js') }}"></script>
    <script src="{{ asset('LP/assets/js/script.js') }}"></script>
    <script type="text/javascript" src="{{ asset('LP/assets/js/extensions/revolution.extension.slideanims.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('LP/assets/js/extensions/revolution.extension.actions.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('LP/assets/js/extensions/revolution.extension.layeranimation.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('LP/assets/js/extensions/revolution.extension.navigation.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('LP/assets/js/extensions/revolution.extension.parallax.min.js') }}"></script>
    

    @yield('js')
</body>
</html>
