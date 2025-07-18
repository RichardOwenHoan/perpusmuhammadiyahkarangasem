<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\BookLoanVerificationMail;
use App\Models\Book;
use App\Models\BookLoan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::where('role', 'siswa')->get();
        return view('Dashboard.User.index', compact('users'));
    }

    /**
     * Display a listing of admin users.
     */
    public function indexAdmin()
    {
        $users = User::where('role', 'admin')->get();
        return view('Dashboard.User.admin', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Dashboard.User.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'in:admin,siswa'],
            'nis' => ['nullable', 'string', 'max:255', 'unique:users,nis'],
            'kelas' => ['nullable', 'string', 'max:255'],
            'redirect_to' => ['nullable', 'string', 'in:admin,siswa'],
        ], [
            'name.required' => 'Nama wajib diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter.',
            'email.required' => 'Email wajib diisi.',
            'email.string' => 'Email harus berupa teks.',
            'email.email' => 'Format email tidak valid.',
            'email.max' => 'Email tidak boleh lebih dari 255 karakter.',
            'email.unique' => 'Email sudah digunakan.',
            'password.required' => 'Password wajib diisi.',
            'password.confirmed' => 'Konfirmasi password tidak cocok.',
            'role.required' => 'Peran wajib dipilih.',
            'role.in' => 'Peran yang dipilih tidak valid.',
            'nis.string' => 'NIS harus berupa teks.',
            'nis.max' => 'NIS tidak boleh lebih dari 255 karakter.',
            'nis.unique' => 'NIS sudah digunakan.',
            'kelas.string' => 'Kelas harus berupa teks.',
            'kelas.max' => 'Kelas tidak boleh lebih dari 255 karakter.',
            'redirect_to.string' => 'Redirect to harus berupa teks.',
            'redirect_to.in' => 'Nilai redirect to tidak valid.',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'nis' => $request->nis,
            'kelas' => $request->kelas,
        ]);

        if ($request->redirect_to === 'admin') {
            return redirect()->route('dashboard.users.indexAdmin')
                ->with('success', 'Data admin berhasil ditambahkan');
        }

        return redirect()->route('dashboard.users.index')
            ->with('success', 'Data siswa berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return view('Dashboard.User.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return view('Dashboard.User.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'nis' => 'nullable|string|max:255|unique:users,nis,' . $user->id,
            'kelas' => 'nullable|string|max:255',
            'role' => 'required|in:admin,siswa',
        ], [
            'name.required' => 'Nama wajib diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter.',
            'email.required' => 'Email wajib diisi.',
            'email.string' => 'Email harus berupa teks.',
            'email.email' => 'Format email tidak valid.',
            'email.max' => 'Email tidak boleh lebih dari 255 karakter.',
            'email.unique' => 'Email sudah digunakan.',
            'nis.string' => 'NIS harus berupa teks.',
            'nis.max' => 'NIS tidak boleh lebih dari 255 karakter.',
            'nis.unique' => 'NIS sudah digunakan.',
            'kelas.string' => 'Kelas harus berupa teks.',
            'kelas.max' => 'Kelas tidak boleh lebih dari 255 karakter.',
            'role.required' => 'Peran wajib dipilih.',
            'role.in' => 'Peran yang dipilih tidak valid.',
        ]);

        $user->update($request->all());

        if ($user->role === 'admin') {
            return redirect()->route('dashboard.users.indexAdmin')
                ->with('success', 'Data admin berhasil diperbarui');
        }

        return redirect()->route('dashboard.users.index')
            ->with('success', 'Data siswa berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $isAdmin = $user->role === 'admin';
        $user->delete();

        if ($isAdmin) {
            return redirect()->route('dashboard.users.indexAdmin')
                ->with('success', 'Data admin berhasil dihapus');
        }

        return redirect()->route('dashboard.users.index')
            ->with('success', 'Data siswa berhasil dihapus');
    }
}
