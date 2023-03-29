<?php

include 'user/connect.php';


$db_connection = new DbConnect();
$conn = $db_connection->connect();

$method = $_SERVER['REQUEST_METHOD'];

$data = json_decode(file_get_contents("php://input"), TRUE);
$returnData = [];

switch ($method) {
    case "GET":
        $sql="SELECT * from images";
        
        $title = $data['title'];
        
        $sql .= " WHERE type='$title'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $images = $stmt->fetch(PDO::FETCH_ASSOC);

        break;

    case "POST":
        $query="INSERT INTO `images`( `title` , `image`) VALUES ( '{$title}' , '{$image_name}') ";

        $title = $data['image_title'];                  // image title
        $image  = $_FILES['image_upload'];              // get image from post data 
        $image_name=$image['name'];                   // image name
        $image_tmp_name=$image['tmp_name'];          // temp file path
        $destination="images/".$image_name;       // Folder path Where Image saved
        move_uploaded_file($image_tmp_name , $destination);   // this function are used to store the file in destination path 
        $stmt = $conn->prepare($query);
        $stmt->execute();

        $result = $stmt -> fetch(PDO::FETCH_ASSOC);

        break;
}
