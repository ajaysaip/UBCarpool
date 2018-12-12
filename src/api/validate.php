<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));

 
$Email_id = $regdata->em; 



$sql = "SELECT Email_id FROM vasantas_db.User WHERE Email_id='$Email_id'";
$result =mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $c=0;
}
else{
    $c=1;
}


echo json_encode($c);


    

   
    
?>