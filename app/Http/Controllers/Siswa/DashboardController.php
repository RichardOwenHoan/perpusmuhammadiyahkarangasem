<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display student dashboard.
     */
    public function index()
    {
        return view('siswa.dashboard');
    }
}
