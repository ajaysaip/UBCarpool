<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));

$First_name = $regdata->fname; 
$Last_name = $regdata->lname; 

$Mobile = $regdata->mob; 
$Email_id = $regdata->em; 
$Password = $regdata->pwd; 






$query = "INSERT INTO User (First_name, Last_name, Mobile, Email_id, Password) VALUES ('$First_name','$Last_name','$Mobile','$Email_id','$Password')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			$c=1;
		} 
		else {
			$c=0;

		} 

		echo json_encode($c);

    

   
    
?>