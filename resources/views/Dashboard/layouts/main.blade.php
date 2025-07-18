<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Dashboard | SMP Muhammadiyah Karangasem</title>
	<!-- core:css -->
	<link rel="stylesheet" href="/DB/assets/vendors/core/core.css">
	<!-- endinject -->
    <!-- plugin css for this page -->
	<link rel="stylesheet" href="/DB/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
	<link rel="stylesheet" href="/DB/assets/vendors/select2/select2.min.css">

	<link rel="stylesheet" href="/DB/assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css">


	<!-- end plugin css for this page -->
	<!-- inject:css -->
	<link rel="stylesheet" href="/DB/assets/fonts/feather-font/css/iconfont.css">
	<link rel="stylesheet" href="/DB/assets/vendors/flag-icon-css/css/flag-icon.min.css">
	<!-- endinject -->
	<!-- Layout styles -->  
	<link rel="stylesheet" href="/DB/assets/css/demo_1/style.css">
	<!-- End layout styles -->
	<link rel="shortcut icon" href="/DB/assets/images/logo.ico" />
</head>
<body class="sidebar-dark">
	<div class="main-wrapper">

        @include('Dashboard.layouts.sidebar')

		<div class="page-wrapper">
					
			<!-- partial:partials/_navbar.html -->
        @include('Dashboard.layouts.navbar')
			<!-- partial -->

		<div class="page-content" >

            <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
            <div>
                <h4 class="mb-3 mb-md-0">Selamat Datang, {{ Auth::user()->name }} !</h4>
            </div>
            {{--  <div class="d-flex align-items-center flex-wrap text-nowrap">
                <div class="input-group date datepicker dashboard-date mr-2 mb-2 mb-md-0 d-md-none d-xl-flex" id="dashboardDate">
                <span class="input-group-addon bg-transparent"><i data-feather="calendar" class=" text-primary"></i></span>
                <input type="text" class="form-control">
                </div>
            </div>  --}}
            </div>

            @yield('content')

		</div>
			<!-- partial:partials/_footer.html -->
			{{-- <footer class="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
				<p class="text-muted text-center text-md-left">Copyright © 2021 <a href="https://www.nobleui.com" target="_blank">NobleUI</a>. All rights reserved</p>
				<p class="text-muted text-center text-md-left mb-0 d-none d-md-block">Handcrafted With <i class="mb-1 text-primary ml-1 icon-small" data-feather="heart"></i></p>
			</footer> --}}
			<!-- partial -->
		
		</div>
	</div>

	<!-- core:js -->
	<script src="/DB/assets/vendors/core/core.js"></script>
	<!-- endinject -->
  <!-- plugin js for this page -->
  <script src="/DB/assets/vendors/chartjs/Chart.min.js"></script>
  <script src="/DB/assets/vendors/jquery.flot/jquery.flot.js"></script>
  <script src="/DB/assets/vendors/jquery.flot/jquery.flot.resize.js"></script>
  <script src="/DB/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
  <script src="/DB/assets/vendors/apexcharts/apexcharts.min.js"></script>
  <script src="/DB/assets/vendors/progressbar.js/progressbar.min.js"></script>
  <script src="/DB/assets/vendors/datatables.net/jquery.dataTables.js"></script>
  <script src="/DB/assets/vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
  <script src="/DB/assets/vendors/tinymce/tinymce.min.js"></script>
  <script src="/DB/assets/js/tinymce.js"></script>

  <script src="/DB/assets/vendors/select2/select2.min.js"></script>

  <script src="/DB/assets/js/select2.js"></script>


  

	<!-- end plugin js for this page -->
	<!-- inject:js -->
	<script src="/DB/assets/vendors/feather-icons/feather.min.js"></script>
	<script src="/DB/assets/js/template.js"></script>
	<!-- endinject -->
	<!-- custom js for this page -->
	<script src="/DB/assets/js/dashboard.js"></script>
	<script src="/DB/assets/js/datepicker.js"></script>
	<!-- custom js for this page -->
	<script src="/DB/assets/js/data-table.js"></script>

	<!-- end custom js for this page -->
  
    @yield('scripts')
</body>
</html>    