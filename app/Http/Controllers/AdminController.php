<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function login() {
        $sections = Section::all();
        return Inertia::render('Auth/Admin/Login', compact('sections'));
    }

    public function authenticate(Request $request) {
        /*dd($request->all());*/
        $request->validate([
            'id_number' => ['required', 'exists:admins,id_number'],
            'section_id' => ['required']
        ]);
        $credentials = $request->only('id_number', 'section_id');

        $admin = Admin::where('id_number', $credentials['id_number'])
                ->where('section_id', $credentials['section_id'])
                ->first();

        if ($admin) {
            Auth::guard('admin')->login($admin);

            return redirect()->route('attendance.create');
        }


        return redirect()->back()->with('error', 'Attempt error');
    }

    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    public function dashboard() {
        return Inertia::render('Admin/Dashboard');
    }
}
