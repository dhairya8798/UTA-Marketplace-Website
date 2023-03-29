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

    $product_id = $data->product_id;

    try{
        $check_user = "SELECT `product_id` FROM `product` WHERE `product_id`=:product_id";
        $check_user_stmt = $conn->prepare($check_user);
        $check_user_stmt->bindValue(':product_id', $product_id,PDO::PARAM_STR);
        $check_user_stmt->execute();

        if($check_user_stmt->rowCount()){
            // $product_id = trim($data->product_id);

            $delete_query = "DELETE FROM `product` WHERE `product_id`=:product_id";

            $delete_stmt = $conn->prepare($delete_query);

            // DATA BINDING
            $delete_stmt->bindValue(':product_id', htmlspecialchars(strip_tags($product_id)),PDO::PARAM_STR);
        
            $delete_stmt->execute();
        
            $returnData = msg(1,201,'You have successfully deleted the product.');
        }else{
            $returnData = msg(0,422, 'This user is not available!');
        }
    }
    catch(PDOException $e){
        $returnData = msg(0,500,$e->getMessage());
    }
    
endif;

echo json_encode($returnData);