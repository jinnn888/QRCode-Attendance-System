<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Section extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'room_number'];

    public function students() {
        return $this->hasMany(Student::class);
    }
}
