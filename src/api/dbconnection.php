<?php
header('Access-Control-Allow-Headers:*'); 
header('Access-Control-Allow-Origin:http://localhost:4200');

$servername = "ubcarpool.cofb0cnwzdqo.us-east-1.rds.amazonaws.com";
//$servername="tethys.cse.buffalo.edu";
$username = "vasantas";
$password = "ChangeMe";
$my_db="vasantas_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$my_db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";





?>