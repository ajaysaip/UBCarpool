<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));

$Email_id = $regdata->em;
$ride_id=(int)$regdata->id;
$charge='p';

$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$Email_id'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
	$user_id=(int)$row["User_id"];	
}

$query = "INSERT INTO vasantas_db.Passenger_Ride (User_id, Ride_id, Charge_Status) VALUES ('$user_id', '$ride_id', '$charge')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=1;
			
			
		} 
		else {
			$c=0;

        } 
        echo json_encode($c);

?>