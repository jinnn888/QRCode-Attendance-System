<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\Student;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
 use Barryvdh\DomPDF\Facade\Pdf;

class AttendanceController extends Controller
{
    public function index() {
        $records = Attendance::whereHas('student', function($query) {
            $query->where('section_id', Auth::guard('admin')->user()->section_id);
        })
        ->where('attendance_day', Carbon::today())
        ->with('student')->get()->map(fn ($item) => array_merge(
            $item->toArray(),
                [
                    'attendance_time_in' => $item->formattedTimeIn,
                    'attendance_time_out' => $item->formattedTimeOut
                ],
            ));

        return response()->json($records);
        /*return Inertia::render('Admin/Attendance/Index', compact('records'));*/
    }

    public function store(Request $request) {
        $today = Carbon::today();
        $currentTime = Carbon::now();
        $morningTime = $today->setTime(7, 45, 0);
        $afternoonTime = $today->setTime(12, 0, 0);

        $check = Student::where('id_number', $request->id_number)->first();

        $attendanceCheck = Attendance::where('student_id', $check->id)
            ->whereDate('attendance_day', $today)
            ->whereNull('attendance_time_out')
            ->whereNotNull('attendance_time_in')
            ->first();

        if ($attendanceCheck) { // If naa syay time in pero walay time out e update
            $hoursSinceCheckIn = Carbon::parse($attendanceCheck->attendance_time_in)->diffInHours($currentTime);

            if ($hoursSinceCheckIn > 4) {
                /*$attendance = Attendance::where('id', $attendance->check());*/
                $attendanceCheck->update(['attendance_time_out' => now()->format('H:i:s')]);
                return redirect()->back()->with('success', 'Student has left the school.');
            }

            return redirect()->back()->with('error', 'QR Code already scanned. Please wait for 4 hours to logout.');
        }

        $remarks = "";
        if ($currentTime->lessThanOrEqualTo($morningTime)) {
            $remarks = 'ontime';
        } elseif($currentTime->between($morningTime, $afternoonTime)) {
            $remarks = 'late';
        } elseif ($currentTime->greaterThanOrEqualTo($afternoonTime)) {
            $remarks = 'halfday';
        }

        Attendance::create([
            'student_id' => $check->id,
            'attendance_day' => $today,
            'attendance_time_in' => date('H:i:s'),
            'attendance_time_out' => null,
            'remarks' => $remarks,
        ]);

        return redirect()->back()->with('success', 'Attendance recorded.');
    }
    public function create() {
        return Inertia::render('Admin/Attendance/Create');
    }

/*    public function destroy(string $id) {*/
/*        $attendance = Attendance::findOrFail($id);*/
/**/
/**/
/**/
/*        $attendance->delete();*/
/**/
/*        return redirect()->back()->with('success', 'Record deleted');*/
/**/
/*    }*/

    public function exportToPdf() {
        $records = Attendance::whereHas('student', function($query) {
            $query->where('section_id', Auth::guard('admin')->user()->section_id);
        })
        ->where('attendance_day', Carbon::today())
        ->with('student')->get()->map(fn ($item) => array_merge(
            $item->toArray(),
                [
                    'attendance_time_in' => $item->formattedTimeIn,
                    'attendance_time_out' => $item->formattedTimeOut
                ],
            ));
        $data['records'] = $records;
        $pdf = Pdf::loadView('attendancepdf', $data)->setPaper('long');
        return $pdf->stream('attendance.pdf');
        /*return view('attendancepdf');*/
    }
    public function viewAll() {
         $records = Attendance::whereHas('student', function($query) {
            $query->where('section_id', Auth::guard('admin')->user()->section_id);
        })
        ->with('student')->get()->map(fn ($item) => array_merge(
            $item->toArray(),
                [
                    'attendance_time_in' => $item->formattedTimeIn,
                    'attendance_time_out' => $item->formattedTimeOut
                ],
            ));

        return Inertia::render('Admin/Attendance/All', compact("records"));
    }
}
