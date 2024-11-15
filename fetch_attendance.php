<?php
$servername = "127.0.0.1";
$username = "root";
$password = "1111";
$dbname = "attendance_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM attendance_records ORDER BY date DESC";
$result = $conn->query($sql);

$attendanceData = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $attendanceData[] = $row;
    }
}

echo json_encode($attendanceData);
$conn->close();
?>
