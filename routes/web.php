<?php

use Illuminate\Support\Facades\Route;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SectionController;

use Inertia\Inertia;

Route::get('admin/login', [AdminController::class, 'login'])->name('admin.login');
Route::post('admin/authenticate', [AdminController::class, 'authenticate'])->name('admin.authenticate');
Route::get('/', function() {
    return inertia('Index');
});
Route::middleware('admin.guard')->group(function() {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    Route::post('attendance-store', [AttendanceController::class, 'store'])->name('attendance.store');
    Route::get('attendance-create', [AttendanceController::class, 'create'])->name('attendance.create');
    Route::get('attendance-index', [AttendanceController::class, 'index'])->name('attendance.index');
    Route::get('attendance-records', [AttendanceController::class, 'viewAll'])->name('attendance.view-all');
    Route::delete('attendance/{id}', [AttendanceController::class, 'destroy'])->name('attendance.destroy');
    Route::get('attendance-pdf', [AttendanceController::class, 'exportToPdf'])->name('attendance.pdf');



    Route::prefix('student')->group(function() {
        Route::get('create', [StudentController::class, 'create'])->name('student.create');
        Route::post('store', [StudentController::class, 'store'])->name('student.store');
        Route::get('index', [StudentController::class, 'index'])->name('student.index');
        Route::get('show/{id}', [StudentController::class, 'show'])->name('student.show');
        Route::delete('destroy/{id}', [StudentController::class, 'destroy'])->name('student.destroy');
          });

    Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
    Route::get('sections/fetch', [SectionController::class, 'fetchAll'])->name('section.fetch-all');

});
/* Student */
Route::get('registration', [RegisterController::class, 'create'])->name('student.registration');
Route::get('/login', [StudentController::class, 'login'])->name('login');
Route::post('authenticate', [StudentController::class, 'authenticate'])->name('student.authenticate');
Route::middleware('student.guard')->prefix('student')->group(function() {
    Route::get('profile', [StudentController::class, 'profile'])->name('student.profile');
    Route::post('logout', [StudentController::class, 'logout'])->name('logout');
});


