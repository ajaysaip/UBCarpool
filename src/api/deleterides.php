<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    
$regdata=json_decode(file_get_contents("php://input"));
$id = $regdata->id;

$sql = "DELETE FROM vasantas_db.Ride WHERE Ride_id ='$id'";
if(mysqli_query($conn,$sql)){
    $c=true;
}
else{
    $c=false;
}
echo json_encode($c);
?>