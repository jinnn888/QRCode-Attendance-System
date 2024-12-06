<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class Student extends Authenticatable
{
    protected $fillable = ['name', 'address', 'birthday', 'gender', 'id_number', 'section_id'];


    public function attendances() {
        return $this->hasMany(Attendance::class);
    }

    public function qrcode() {
        return $this->hasOne(QrCode::class);
    }

    public function section() {
        return $this->belongsTo(Section::class);
    }

}
