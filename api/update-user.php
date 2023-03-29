<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

    // Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

include 'user/connect.php';

$db_connection = new DbConnect();
$conn = $db_connection->connect();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// IF THERE ARE NO EMPTY FIELDS THEN-
else:

    $username = trim($data->username);
    $first_name = trim($data->first_name);
    $last_name = trim($data->last_name);
    $email = trim($data->email);
    $mobile = trim($data->mobile);
    $user_type = trim($data->user_type);
    
    try{

        $update_query = "UPDATE `user` SET `first_name`=:first_name,`last_name`=:last_name,`mobile`=:mobile,`username`=:username,`user_type`=:user_type WHERE `username`=:username";

        $update_stmt = $conn->prepare($update_query);

        // DATA BINDING
        $update_stmt->bindValue(':username', $username,PDO::PARAM_STR);
        $update_stmt->bindValue(':first_name', htmlspecialchars(strip_tags($first_name)),PDO::PARAM_STR);
        $update_stmt->bindValue(':last_name', htmlspecialchars(strip_tags($last_name)),PDO::PARAM_STR);
        $update_stmt->bindValue(':email', $email,PDO::PARAM_STR);
        $update_stmt->bindValue(':mobile', $mobile,PDO::PARAM_STR);
        $update_stmt->bindValue(':user_type', $user_type,PDO::PARAM_STR);
        
        $update_stmt->execute();
        
        $returnData = msg(1,201,'You have successfully updated the user.');

    }
    catch(PDOException $e){
        $returnData = msg(0,500,$e->getMessage());
    }
    
endif;

echo json_encode($returnData);