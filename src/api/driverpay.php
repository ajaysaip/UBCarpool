<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$mode=$regdata->mode;
$mobile=$regdata->mobile;



$query = "UPDATE CheckIn SET payment_mode='$mode',payment_credential='$mobile' WHERE Ride_id ='$ride_id'";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=true;
			
			
		} 
		else {
			$c=false;

        } 
        echo json_encode($c);

?>