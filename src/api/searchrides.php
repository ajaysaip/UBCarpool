<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://localhost:4200');
    
include 'dbconnection.php';
    

$regdata=json_decode(file_get_contents("php://input"));


$Start_city = $regdata->sc;
$End_city = $regdata->ec;
$Date_travel=$regdata->dat;
$Email_id=$regdata->em;

$sql = "SELECT User_id FROM vasantas_db.User WHERE Email_id ='$Email_id'";
$result=mysqli_query($conn,$sql);


if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $user_id=$row["User_id"];
    $x="";	
    //print_r($user_id);
}




if($Start_city==="" && $End_city==="" && $Date_travel===null){
$query = "SELECT Ride_id,Start_city,End_city,Date_travel,Time,start_location,end_location,Vacancies,Charge,Flexibility FROM vasantas_db.Ride WHERE User_id!='$user_id' AND Start_city!='$x' AND Vacancies!=0" ;
$result1=mysqli_query($conn,$query);

}
else if($Date_travel===null){
$query = "SELECT Ride_id,Start_city,End_city,Date_travel,Time,start_location,end_location,Vacancies,Charge,Flexibility FROM vasantas_db.Ride WHERE Start_city ='$Start_city' AND End_city ='$End_city' AND User_id!='$user_id' AND Start_city!='$x' AND Vacancies!=0" ;
$result1=mysqli_query($conn,$query);

}
else{
$query = "SELECT Ride_id,Start_city,End_city,Date_travel,Time,start_location,end_location,Vacancies,Charge,Flexibility FROM vasantas_db.Ride WHERE Start_city ='$Start_city' AND End_city ='$End_city' AND Date_travel='$Date_travel' AND User_id!='$user_id' AND Start_city!='$x' AND Vacancies!=0" ;
$result1=mysqli_query($conn,$query);
}
$res=array();


if (mysqli_num_rows($result1) > 0) {

	$i=0;
while ( $row = mysqli_fetch_assoc($result1) ) {

    $res[$i]=$row;
    $i=$i+1;


} 

echo json_encode($res);



}
/* echo json_encode($end_city);
echo json_encode($date);
echo json_encode($time);
echo json_encode($start_location);
echo json_encode($end_location);
echo json_encode($vacancies);
echo json_encode($charge);
echo json_encode($flex); */

		

		
    



?>