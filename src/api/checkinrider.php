<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$set=1;
$status='c';


$query = "INSERT INTO vasantas_db.CheckIn (Ride_id, Riderset) VALUES ('$ride_id', '$set')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=true;
			
			
		} 
		else {
			$c=false;

		} 

		$query1 = "UPDATE Passenger_Ride SET Ride_Status='$status' WHERE Ride_id ='$ride_id'";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query1)) {
			
			
			
			$c1=true;
			
			
		} 
		else {
			$c1=false;

		} 
		



        echo json_encode($c);

?>