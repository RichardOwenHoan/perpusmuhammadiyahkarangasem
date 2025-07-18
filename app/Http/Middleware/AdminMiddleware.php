<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // asumsi ada kolom role di users: 'admin' atau 'siswa'
        if (! auth()->check() || auth()->user()->role !== 'admin') {
            // redirect siswa/non-admin ke halaman lain (misal dashboard siswa)
            return redirect()->route('landing.home');
            // atau jika mau abort:
            // abort(403, 'Anda bukan admin.');
        }

        return $next($request);
    }
}
