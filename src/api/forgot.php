<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$Email_id = $regdata->em;
$pwd=$regdata->pwd;
//print_r($Email_id);
 

$c="";

$sql = "UPDATE User SET Password='$pwd' WHERE Email_id ='$Email_id'";
if(mysqli_query($conn,$sql)){
    $c="Updated";
}
else{
    $c="DB Error";
}


echo json_encode($c);





?>