<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Access-Control headers are received during OPTIONS requests
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

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    $name = trim($data->name);
    $email = trim($data->email);
    $phone = trim($data->phone);
    $reason = trim($data->reason);

    $to_email = "sayitright.noreply@gmail.com";
    $subject = "Contact us from user: " . $email;
    $body = "Contact us from user: " . $email . "\n" .
        "User details are:-\n" .
        "email: " . $email . "\n" .
        "name: " . $nname . "\n" .
        "phone: " . $phone . "\n" .
        "Reason: " . $reason;
    $headers = "From: " . $email;

    mail($to_email, $subject, $body, $headers);
}
echo json_encode($returnData);
