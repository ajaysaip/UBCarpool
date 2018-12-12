<?php
header('Access-Control-Allow-Headers:*');    
header('Access-Control-Allow-Origin:http://www-student.cse.buffalo.edu/ubcarpool');
    
include 'dbconnection.php';
    



require_once ('Braintree/lib/Braintree.php');
 

$regdata=json_decode(file_get_contents("php://input"));


$gateway = new Braintree_Gateway(array(
    'environment' => 'sandbox',
    'merchantId' => 'x5zz4gwm4kn9sgg5',
    'publicKey' => 'yqfdf6npfxy8jyqx',
    'privateKey' => '7f9cbe15584166437da27a9a807d3082'
  )); 

$nonceFromTheClient =$regdata->nonce;
$amount=$regdata->chargeAmount;
$result = $gateway->transaction()->sale([
  'amount' => $amount,
  'paymentMethodNonce' => $nonceFromTheClient,
  'options' => [
    'submitForSettlement' => True
  ]
]);
echo json_encode(array('response' => $result), JSON_FORCE_OBJECT);

?>