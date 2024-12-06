<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            /*"email" => "dustin@gmail.com",*/
            "name" => "Dustin",
            "id_number" => "S23-0401",
            "section_id" => 1
        ]);
    }
}
