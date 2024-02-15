<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'cpcb_test';
$port = 3308;


// $db_host = '103.233.25.109';
// $db_username = 'root';
// $db_password = 'MgwydlERT!@vw9fi';
// $db_name = 'cpcb_new';
// $port = 3306;

$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name,$port);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}else{
    //echo 'Connected';
}
?>