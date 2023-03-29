<?php

include 'connect.php';

$db_connection = new DbConnect();
$conn = $db_connection->connect();

$method = $_SERVER['REQUEST_METHOD'];

$data = json_decode(file_get_contents("php://input"), TRUE);
$returnData = [];

switch ($method) {
    case "POST":
        $sql = "SELECT * FROM user";
        $username = $data['username'];
        $password = $data['password'];
        $sql .= " WHERE username='$username'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);

        $check_password = password_verify($password, $users['password']);
        // echo json_encode($users);
        if ($check_password) {
            if ($users) {
                $response =
                    [
                        'status' => 1,
                        'user_id' => $users["user_id"],
                        'fname' => $users["first_name"],
                        'lname' => $users["last_name"],
                        'user_type' => $users["user_type"],
                        'email' => $users["email"],
                        'message' => 'success'
                    ];
                echo json_encode($response);
                break;
            } else {
                $response = ['status' => 0, 'user_id' => 0, 'user_type' => '0', 'message' => 'failure'];
                echo json_encode($response);
            }
        } else {
            $response = ['status' => 2, 'user_id' => 0, 'user_type' => '0', 'message' => 'Incorrect username or password'];
            echo json_encode($response);
        }
        break;
        // case "POST":
        //     $user = json_decode( file_get_contents('php://input') );
        //     $sql = "INSERT INTO users(id, name, email, mobile, created_at) VALUES(null, :name, :email, :mobile, :created_at)";
        //     $stmt = $conn->prepare($sql);
        //     $created_at = date('Y-m-d');
        //     $stmt->bindParam(':name', $user->name);
        //     $stmt->bindParam(':email', $user->email);
        //     $stmt->bindParam(':mobile', $user->mobile);
        //     $stmt->bindParam(':created_at', $created_at);

        //     if($stmt->execute()) {
        //         $response = ['status' => 1, 'message' => 'Record created successfully.'];
        //     } else {
        //         $response = ['status' => 0, 'message' => 'Failed to create record.'];
        //     }
        //     echo json_encode($response);
        //     break;

        // case "PUT":
        //     $user = json_decode( file_get_contents('php://input') );
        //     $sql = "UPDATE users SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
        //     $stmt = $conn->prepare($sql);
        //     $updated_at = date('Y-m-d');
        //     $stmt->bindParam(':id', $user->id);
        //     $stmt->bindParam(':name', $user->name);
        //     $stmt->bindParam(':email', $user->email);
        //     $stmt->bindParam(':mobile', $user->mobile);
        //     $stmt->bindParam(':updated_at', $updated_at);

        //     if($stmt->execute()) {
        //         $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        //     } else {
        //         $response = ['status' => 0, 'message' => 'Failed to update record.'];
        //     }
        //     echo json_encode($response);
        //     break;

        // case "DELETE":
        //     $sql = "DELETE FROM users WHERE id = :id";
        //     $path = explode('/', $_SERVER['REQUEST_URI']);

        //     $stmt = $conn->prepare($sql);
        //     $stmt->bindParam(':id', $path[3]);

        //     if($stmt->execute()) {
        //         $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        //     } else {
        //         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        //     }
        //     echo json_encode($response);
        //     break;
}
