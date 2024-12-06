<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attendance Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container"
    <div class="header">
        @php
            $imagePath = public_path('img/lc-seal.png');
            $imageData = base64_encode(file_get_contents($imagePath));
            $imageSrc = 'data:image/png;base64,' . $imageData;
        @endphp
    <img src="{{ $imageSrc }}" alt="my logo" class="logo">
    <h3>Lourdes College Cagayan De Oro</h3>
      <h4>Department of Education</h4>
      <p>CAPISTRANO AMBOT LCCDO</p>
    </div>

    <h2>ATTENDANCE LOG</h2>
    <p><strong>ATTENDANCE</strong><br>May 15, 2023<br>11:00 AM</p>

    <div class="info">
        <p>Strand and Section: <strong>TVL IOS</strong></p>
      <p>Beadle: <strong>Dustin</strong></p>
    </div>

   <div class="table_component" role="region" tabindex="0">
<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>LOG DAY</th>
        </tr>
    </thead>
    <tbody>
        @foreach($records as $record)
            <tr>
                <td>{{ $record['student']['name'] }}</td>
                <td>{{ $record['student']['id_number'] }}</td>
                <td>{{ $record['attendance_time_in'] }}</td>
                <td>{{ $record['attendance_time_out'] }}</td>
                <td>{{ $record['attendance_day'] }}</td>
            </tr>
        @endforeach


    </tbody>
</table>
</div>  </div>
</body>
</html>

