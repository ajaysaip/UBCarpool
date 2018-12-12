<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$status=$regdata->status;
$em=$regdata->em;
$amount=$regdata->charge;

$sql="SELECT User_id FROM vasantas_db.User WHERE Email_id='$em'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
	$user_id=$row["User_id"];	
}



$query = "INSERT INTO vasantas_db.Payment (Transaction_Status, Ride_id, User_id, Amount) VALUES ('$status', '$ride_id','$user_id','$amount')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=true;
			
			
		} 
		else {
			$c=false;

        } 
        echo json_encode($c);

?>