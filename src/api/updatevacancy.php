<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$pass=$regdata->pass;

$sql = "SELECT Vacancies FROM vasantas_db.Ride WHERE Ride_id ='$ride_id'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
	$vac=(int)$row["Vacancies"]-$pass;	
}



$sql = "UPDATE Ride SET Vacancies='$vac' WHERE Ride_id ='$ride_id'";
if(mysqli_query($conn,$sql)){
    $c="Updated";
}
else{
    $c="DB Error";
}

        echo json_encode($c);

?>