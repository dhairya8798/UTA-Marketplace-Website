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

    try{

        $check_user = "SELECT `username` FROM `user` WHERE `username`=:username";
        $check_user_stmt = $conn->prepare($check_user);
        $check_user_stmt->bindValue(':username', $username,PDO::PARAM_STR);
        $check_user_stmt->execute();

        if($check_user_stmt->rowCount()):
            $username = trim($data->username);

            $delete_query = "DELETE FROM `user` WHERE `username`=:username";

            $delete_stmt = $conn->prepare($delete_query);

            // DATA BINDING
            $delete_stmt->bindValue(':username', htmlspecialchars(strip_tags($username)),PDO::PARAM_STR);
        
            $delete_stmt->execute();
        
            $returnData = msg(1,201,'You have successfully deleted the user.');
        else:
            $returnData = msg(0,422, 'This user is not available!');
        endif;
    }
    catch(PDOException $e){
        $returnData = msg(0,500,$e->getMessage());
    }
    
endif;

echo json_encode($returnData);