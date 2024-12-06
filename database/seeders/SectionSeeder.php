<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Section;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Section::factory(5)->create();*/
        Section::create([
            "name" => "ST. ISIDORE OF SIVILLE",
            "room_number" => 312
        ]);
    }
}
