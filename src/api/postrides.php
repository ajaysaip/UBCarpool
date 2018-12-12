<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));




$Start_city = $regdata->src; 
$End_city = $regdata->dest;
$Vacancies = $regdata->vacancy;
$Date_travel = $regdata->date; 
$Time = $regdata->time;
$start_location = $regdata->sp; 
$end_location = $regdata->ep;
$Charge = $regdata->charge;
$Flexibility = $regdata->flex;
$Email_id = $regdata->em;




$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$Email_id'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
	$user_id=$row["User_id"];	
}

$query = "INSERT INTO Ride (User_id, Start_city, End_city, Vacancies, Date_travel, Time, start_location, end_location, Charge, Flexibility) VALUES ('$user_id', '$Start_city', '$End_city', '$Vacancies', '$Date_travel', '$Time', '$start_location', '$end_location', '$Charge', '$Flexibility')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=1;
			
			
		} 
		else {
			$c=0;

		} 

		echo json_encode($c);
    



?>