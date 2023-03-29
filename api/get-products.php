<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

include 'user/connect.php';

$db_connection = new DbConnect();
$conn = $db_connection->connect();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

$userID = trim($data->userID);

// IF REQUEST METHOD IS NOT POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    $check_prod = "SELECT `product_id` FROM `product` WHERE `user_id`=:userID";
    $check_prod_stmt = $conn->prepare($check_prod);
    $check_prod_stmt->bindValue(':userID', $userID, PDO::PARAM_STR);
    $check_prod_stmt->execute();

    
    if ($check_prod_stmt->rowCount()) {
        try {
            $select_query = "SELECT  `product_id`,`image_path`,`product_name`,`price`,`quantity` FROM `product` WHERE `user_id`=:userID";
            
            
            $select_stmt = $conn->prepare($select_query);
            $select_stmt->bindValue(':userID', $userID, PDO::PARAM_STR);
            $select_stmt->execute();

            for ($x = 0; $x < $select_stmt->rowCount(); $x++) {
                if ($select_stmt->rowCount()) {
                    $row = $select_stmt->fetch(PDO::FETCH_ASSOC);
                    $returnData[$x] = $row;
                } else {
                    return null;
                }
            }
        } catch (PDOException $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    } else {
        $returnData = msg(0, 500, "Error");
    }
}
echo json_encode($returnData);
