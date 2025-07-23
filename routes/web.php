<?php

use App\Http\Controllers\Admin\FineController;
use App\Http\Controllers\Admin\LoanController;
use App\Http\Controllers\Admin\ReturnController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DB_BookController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('LandingPage.home');
})->name('landing.home');

Route::get('/dashboard', function () {
    return redirect('/dashboard/books');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::resource('/dashboard/books', DB_BookController::class);
    Route::resource('/dashboard/loans', LoanController::class)->names('dashboard.loans');
    Route::get('/dashboard/loans/data/exports', [LoanController::class, 'export'])->name('dashboard.loans.export');
    Route::post('/dashboard/loans/{loan}/verify', [LoanController::class, 'verify'])->name('dashboard.loans.verify');
    Route::post('/dashboard/loans/{loan}/reject', [LoanController::class, 'reject'])->name('dashboard.loans.reject');
    Route::resource('/dashboard/returns', ReturnController::class)->names('dashboard.returns');
    Route::post('/dashboard/returns/process/{loan}', [ReturnController::class, 'processReturn'])->name('dashboard.returns.process');
    Route::post('/dashboard/returns/extend/{loan}', [ReturnController::class, 'extend'])->name('dashboard.returns.extend');
    Route::post('/dashboard/returns/remind/{loan}', [ReturnController::class, 'manualReminder'])->name('dashboard.returns.remind');

    Route::get('/dashboard/fines', [FineController::class, 'index'])->name('dashboard.fines.index');
    Route::post('/dashboard/fines/{fine}/paid', [FineController::class, 'markAsPaid'])->name('dashboard.fines.paid');

    Route::resource('/dashboard/users', UserController::class)->names('dashboard.users');
    Route::get('/dashboard/admins', [UserController::class, 'indexAdmin'])->name('dashboard.users.indexAdmin');
});

// Landing Page Routes
Route::name('landing.')->group(function () {
    Route::get('/', [App\Http\Controllers\LandingPage\HomeController::class, 'index'])->name('home');

    Route::middleware('auth')->group(function () {
        // Daftar Buku Routes
        Route::get('/books', [App\Http\Controllers\LandingPage\BookController::class, 'index'])->name('books');
        Route::get('/books/{id}', [App\Http\Controllers\LandingPage\BookController::class, 'show'])->name('books.show');
    });

    // About Route
    Route::get('/about', function () {
        return view('LandingPage.about');
    })->name('about');
});

// Siswa Routes
Route::middleware(['auth', 'siswa'])->name('siswa.')->prefix('siswa')->group(function () {
    // Book Loan Routes
    Route::get('/books/{id}/borrow', [App\Http\Controllers\Siswa\BookLoanController::class, 'create'])->name('books.create');
    Route::post('/books/{id}/borrow', [App\Http\Controllers\Siswa\BookLoanController::class, 'borrow'])->name('books.borrow');

    // History Routes
    Route::get('/loans/history', [App\Http\Controllers\Siswa\BookLoanController::class, 'history'])->name('books.loans.history');
    Route::get('/loans/{id}', [App\Http\Controllers\Siswa\BookLoanController::class, 'show'])->name('books.loan.show');
});

Route::middleware(['auth', 'admin'])->group(function () {
    // Admin: Peminjaman Buku
    Route::get('/admin/loans', [App\Http\Controllers\Admin\LoanController::class, 'index'])->name('admin.loans.index');
    Route::get('/admin/loans/need-attention', [App\Http\Controllers\Admin\LoanController::class, 'needAttention'])->name('admin.loans.need-attention');
    Route::put('/admin/loans/{id}/mark-resolved', [App\Http\Controllers\Admin\LoanController::class, 'markResolved'])->name('admin.loans.mark-resolved');
});

require __DIR__ . '/auth.php';
