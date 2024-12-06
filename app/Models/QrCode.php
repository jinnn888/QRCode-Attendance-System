<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QrCode extends Model
{
    protected $fillable = ['image_path', 'student_id'];
    public function student() {
        return $this->belongsTo(Student::class);
    }
}
