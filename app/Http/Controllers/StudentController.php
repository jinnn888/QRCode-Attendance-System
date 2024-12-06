<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\QrCode;
/*use SimpleSoftwareIO\QrCode\Facades\QrCode as QRCode;*/
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\Section;

class StudentController extends Controller
{
    public function index() {
        $students = Student::with('qrcode')
                    ->where('section_id', Auth::guard('admin')->user()->section_id)
                    ->get();
        return Inertia::render('Admin/Student/Index', compact('students'));
    }
    public function create() {
        $sections = Section::all();
        return Inertia::render('Admin/Student/Create', compact('sections'));
    }

    public function store(Request $request) {
        $request->validate([
            'name' => ['required', 'min:6'],
            'id_number' => ['required', 'unique:students'],
            'birthday' => ['required'],
            'gender' => ['required'],
        ]);

        $qrcode = \SimpleSoftwareIO\QrCode\Facades\QrCode::size(300)
                    ->generate($request->id_number);
        $filename = 'qrcode_' . time() . '.svg';

        /*$publicUrl = Storage::disk('public')->url($filename);*/
        Storage::disk('public')->put($filename, $qrcode);

        $student = Student::create([
            'name' => $request->name,
            'id_number' => $request->id_number,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'section_id' => Auth::guard('admin')->user()->section_id
        ]);

        QrCode::create([
            'image_path' => $filename,
            'student_id' => $student->id
        ]);


        return redirect()->back()->with('success', 'Student and and Qrcode has been created.');
    }

    public function show(string $id) {
        $student = Student::with(['qrcode', 'section'])
                            ->where('id', $id)->first();

        return Inertia::render('Admin/Student/Show', compact('student'));
    }

    public function destroy(string $id) {
        $student = Student::findOrFail($id);
        $qrcode_image = $student->qrcode->image_path;
        /*dd($qrcode_image);*/
        Storage::disk('public')->delete($qrcode_image);
        $student->delete();

        return redirect()->back()->with('success', 'Student record deleted.');

    }
    // Authenticating    part
    public function login() {
        $sections = Section::all();
        return Inertia::render('Auth/Student/Login', compact('sections'));
    }

    public function authenticate(Request $request) {
        $request->validate([
            'id_number' => ['required', 'exists:students,id_number'],
            'section_id' => ['required']
        ]);
        $credentials = $request->only('id_number', 'section_id');

        $student = Student::where('id_number', $credentials['id_number'])
                            ->where('section_id', $credentials['section_id'])
                            ->first();

        if ($student) {
            Auth::guard('student')->login($student);
            return redirect()->route('student.profile');
        }


        return redirect()->route('login')->with('error', 'Attempt error');
    }

    public function logout(Request $request) {
        Auth::guard('student')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');

    }

    // Profile part
    public function profile() {
        return Inertia::render('Student/Profile');
    }
}
