<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));

$Email_id=$regdata->em;
$ride_id=array();

$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$Email_id'";
$result=mysqli_query($conn,$sql);

$j=0;
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $user_id=$row["User_id"];
 }
 $sql1 = "SELECT Ride_id FROM vasantas_db.Ride WHERE User_id ='$user_id'";
$result1=mysqli_query($conn,$sql1);


if (mysqli_num_rows($result1) > 0) {
    while($row1 = mysqli_fetch_assoc($result1)){
    $ride_id[$j]=$row1["Ride_id"];
    $j=$j+1;
}
//print_r($ride_id);
 }
 else{
     $ride_id=null;
 }


 $asrider=array();
 $rider=array();
 $x=0;$y=0;
//rider(passenger)
 $sql2 = "SELECT Ride_id FROM vasantas_db.Passenger_Ride WHERE User_id ='$user_id' AND Ride_Status=null";
$result2=mysqli_query($conn,$sql2);
 if (mysqli_num_rows($result2) > 0) {
    while ( $tuple = mysqli_fetch_assoc($result2) ) {
    $asrider[$x] = $tuple["Ride_id"];
    $x=$x+1;
    }
    $i=0;
    $inc=0;
    for($inc=0;$inc<sizeof($asrider);$inc++){

    $query = "SELECT Ride_id,Start_city,End_city,Date_travel FROM vasantas_db.Ride WHERE Ride_id='$asrider[$inc]'";
 $opt=mysqli_query($conn,$query);






 if (mysqli_num_rows($opt) > 0) {
 
    
 while ( $row = mysqli_fetch_assoc($opt) ) {
 
     $rider[$i]=$row;
     $i=$i+1;
 
 }
 }
}  
 }
 $j=0;
 $asdriver=array();
 $drive=array();
 //driver
 while($y<sizeof($ride_id)){
 $sql3 = "SELECT Ride_id FROM vasantas_db.Passenger_Ride WHERE Ride_id ='$ride_id[$y]' AND Ride_Status='c'";
$result3=mysqli_query($conn,$sql3);
//print_r($result3);
 if (mysqli_num_rows($result3) > 0) {
    $tuple1 = mysqli_fetch_assoc($result3);
        $asdriver[$y] = $tuple1["Ride_id"];
        //$y=$y+1;
        //print_r($asdriver[$y]);
    
    //for each ride_id write the select query to display the results.//
   
    //$inc1=0;
//for($inc1=0;$inc1<sizeof($asdriver);$inc1++){
    $query1 = "SELECT Ride_id,Start_city,End_city,Date_travel FROM vasantas_db.Ride WHERE Ride_id='$asdriver[$y]'";
 $opt1=mysqli_query($conn,$query1);


 


if (mysqli_num_rows($opt1) > 0) {

	
 $eachrow1 = mysqli_fetch_assoc($opt1);

    $drive[$j]=$eachrow1;
    $j=$j+1;

//}
//}
}
 }
 $y=$y+1;
}
 echo json_encode(array('asdriver' => $drive,'asrider'=>$rider), JSON_FORCE_OBJECT);



 















?>