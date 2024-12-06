<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;
class Attendance extends Model
{
    protected $fillable = ['attendance_day', 'attendance_time_in', 'attendance_time_out','student_id', 'remarks'];


    public function student() {
        return $this->belongsTo(Student::class);
    }
    public function formattedTimeIn() : Attribute
    {
        return new Attribute(
            get: fn ($value, $attributes) =>$this->attendance_time_in
            ? Carbon::parse($this->attendance_time_in)->format('h:i A')
            : null        );
    }
    public function formattedTimeOut() : Attribute
    {
        return new Attribute(
            get: fn ($value, $attributes) =>  $this->attendance_time_out
            ? Carbon::parse($this->attendance_time_out)->format('h:i A')
            : null
        );
    }

  }
