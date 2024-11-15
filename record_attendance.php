<?php
$servername = "sql306.byethost15.com";
$username = "b15_37714496";
$password = "Ka936988";
$dbname = "b15_37714496_attendance_tracker";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if data is posted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $subject = $_POST['subject'];
    $attendance = $_POST['attendance'];
    $date = $_POST['date'];

    // Insert data into the database
    $sql = "INSERT INTO attendance_records (subject, attendance, date) VALUES ('$subject', '$attendance', '$date')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Attendance recorded successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
