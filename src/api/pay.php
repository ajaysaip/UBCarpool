<?php

header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://www-student.cse.buffalo.edu/ubcarpool');
    
include 'dbconnection.php';
    



require_once ('Braintree/lib/Braintree.php');
 


$gateway = new Braintree_Gateway(array(
    'environment' => 'sandbox',
    'merchantId' => 'x5zz4gwm4kn9sgg5',
    'publicKey' => 'yqfdf6npfxy8jyqx',
    'privateKey' => '7f9cbe15584166437da27a9a807d3082'
  )); 



$clientToken = $gateway->clientToken()->generate();


echo json_encode(array('token' => $clientToken), JSON_FORCE_OBJECT);

 ?>