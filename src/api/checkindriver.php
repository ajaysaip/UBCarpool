<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$set=1;



$query = "UPDATE CheckIn SET Driverset='$set' WHERE Ride_id ='$ride_id'";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=true;
			
			
		} 
		else {
			$c=false;

		} 
		
$query = "UPDATE Passenger_Ride SET Ride_Status='f' WHERE Ride_id ='$ride_id'";
if (mysqli_query($conn, $query)) {
			
			
			
	$a=true;
	
	
} 
else {
	$a=false;

} 
        echo json_encode($c);

?>