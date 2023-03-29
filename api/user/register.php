<?php

include 'connect.php';

$db_connection = new DbConnect();
$conn = $db_connection->connect();

$method = $_SERVER['REQUEST_METHOD'];

$data = json_decode(file_get_contents("php://input"), TRUE);
$returnData = [];

switch($method) {
    case "POST":
        $username = $data['username'];
        $mobile = $data['mobile'];
        $email = $data['email'];
        $password = $data['password'];

        $sql = "SELECT * FROM user";
        $sql .= " WHERE username='$username'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
        if($users) {
            $response = ['status' => 0, 'message' => 'User already registered'];
            echo json_encode($response);
        }else{
            $insert_query = "INSERT INTO user(`username`,`password`,`email`,`mobile`) VALUES(:username,:password,:email,:mobile)";

            $insert_stmt = $conn->prepare($insert_query);

            $insert_stmt->bindValue(':username', $username, PDO::PARAM_STR);
            $insert_stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $insert_stmt->bindValue(':mobile', $mobile, PDO::PARAM_STR);
            
            // https://onlinephp.io/password-hash
            $insert_stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT), PDO::PARAM_STR);

            $insert_stmt->execute();

            
            // Check if it is working
            $to      = $email;
            $subject = 'Account Created';
            $message = "Hi $username! Your account is created for mercado escolar. You can go ahead and log in here: http://vxn5253.uta.cloud/login .";
            $headers = 'From: mercadoescolar@vxn5253.uta.cloud' .
                'X-Mailer: PHP/' . phpversion();
                
            mail($to, $subject, $message, $headers);
            // Check if it is working


            $response = ['status' => 1, 'message' => 'User successfully registered'];
            echo json_encode($response);

        }
        // } catch (PDOException $e) {
        //     $response = ['status' => 0, 'message' => 'Error'];
        //     echo json_encode($response);
        // }

        // $sql .= " WHERE username='$username'";
        // $stmt = $conn->prepare($sql);
        // $stmt->execute();
        // $users = $stmt->fetch(PDO::FETCH_ASSOC);
        // if($users) {
        //     // $response = ['status' => 1, 'message' => 'User found.'];
        //     switch($users["user_type"]){
        //         case "1":
        //             $response = ['status' => 1, 'user_type' => '1'];
        //             echo json_encode($response);
        //             break;
        //         case "2":
        //             $response = ['status' => 1, 'user_type' => '2'];
        //             echo json_encode($response);
        //             break;
        //         case "3":
        //             $response = ['status' => 1, 'user_type' => '3'];
        //             echo json_encode($response);
        //             break;
        //         case "4":
        //             $response = ['status' => 1, 'user_type' => '4'];
        //             echo json_encode($response);
        //             break;
        //         default:
        //             echo json_encode("none");
        //     }
        // } else {
        //     $response = ['status' => 0, 'user_type' => '0'];
        //     echo json_encode($response);
        // }
        break;
}