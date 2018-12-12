<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id=(int)$regdata->id;
$em=$regdata->em;
$score=$regdata->score;
$comments=$regdata->comments;
$set='d';


$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$em'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $user_id=$row["User_id"];	
    
}



$query = "INSERT INTO vasantas_db.Feedback (User_id,Ride_id, Feedback_score,Feedback_comments) VALUES ('$user_id','$ride_id,'$score','$comments')";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$c=true;
			
			
		} 
		else {
			$c=false;

        } 



        $query = "UPDATE vasantas_db.Passenger_Ride SET Ride_Status='$set' where Ride_id='$ride_id'";
//$data = mysql_query ($query)or die(mysql_error());

		 if (mysqli_query($conn, $query)) {
			
			
			
			$d=true;
			
			
		} 
		else {
			$d=false;

        } 

    

    
        echo json_encode($c);

?>