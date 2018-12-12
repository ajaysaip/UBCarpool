<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$Email_id = $regdata->em; 
$Password=$regdata->pwd;



$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id='$Email_id' AND Password='$Password'";
$result =mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $c=1;
    
}
else{
    $c=0;
}





echo json_encode($c);
   
    
?>