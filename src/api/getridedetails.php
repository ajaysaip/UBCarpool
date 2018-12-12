<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$ride_id = $regdata->id;
$Email_id=$regdata->em;
//print_r($Email_id);




$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$Email_id'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $user_id=$row["User_id"];	
    
}


//select user details  passengers//
$query = "SELECT First_Name,Last_Name,Mobile,Email_id FROM vasantas_db.User WHERE User_id ='$user_id'" ;

$result1=mysqli_query($conn,$query);


    $res=array();


if (mysqli_num_rows($result1) > 0) {

	$i=0;
while ( $row = mysqli_fetch_assoc($result1) ) {

    
    $res[$i]=$row;
    $i=$i+1;



} 

}


$sql1 = "SELECT User_id FROM vasantas_db.Ride WHERE Ride_id ='$ride_id'";
$result2=mysqli_query($conn,$sql1);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result2);
    $user_id1=$row["User_id"];	
    
}



//select user details  riders //
$query1 = "SELECT First_Name,Last_Name,Mobile,Email_id FROM vasantas_db.User WHERE User_id ='$user_id1'" ;

$result3=mysqli_query($conn,$query1);


    $res1=array();


if (mysqli_num_rows($result3) > 0) {

	$j=0;
while ( $row = mysqli_fetch_assoc($result3) ) {

    
    $res1[$j]=$row;
    $j=$j+1;



} 

}



$query2 = "SELECT Start_city,End_city,start_location,end_location,Date_travel,Time FROM vasantas_db.Ride WHERE Ride_id ='$ride_id'" ;

$result4=mysqli_query($conn,$query2);


    $res2=array();


if (mysqli_num_rows($result4) > 0) {

	$v=0;
while ( $row = mysqli_fetch_assoc($result4) ) {

    
    $res2[$v]=$row;
    $v=$v+1;



} 

}









/* echo json_encode($res);
echo json_encode($res1);
echo json_encode($res2);
 */


echo json_encode(array($res,$res1,$res2), JSON_FORCE_OBJECT);


		

		
    



?>