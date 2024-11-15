<?php
$servername = "sql306.byethost15.com";
$username = "b15_37714496";
$password = "Ka936988";
$dbname = "b15_37714496_attendance_tracker";
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
