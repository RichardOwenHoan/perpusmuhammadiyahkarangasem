<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user() || $request->user()->role !== $role) {
            // Redirect admin to admin dashboard
            if ($request->user() && $request->user()->role === 'admin') {
                return redirect()->route('admin.dashboard');
            }

            // Redirect student to student dashboard
            if ($request->user() && $request->user()->role === 'siswa') {
                return redirect()->route('siswa.dashboard');
            }

            // If not logged in, redirect to login
            return redirect()->route('login');
        }

        return $next($request);
    }
}
