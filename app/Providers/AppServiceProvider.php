<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use App\Models\Category;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Menyediakan daftar kategori untuk navbar
        View::composer('LandingPage.layouts.partial.navbar', function ($view) {
            $view->with('navbarCategories', Category::orderBy('name')->get());
        });
    }
}
