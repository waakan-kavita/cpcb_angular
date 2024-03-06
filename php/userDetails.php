<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include_once("db.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata)) {
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->username));
    
    // Check if the username exists
    $username_check_sql = "SELECT admin_id,username, pass,user_type,name,email FROM site_setting WHERE username='$email'";
    $username_check_result = mysqli_query($mysqli, $username_check_sql);
    
    // Initialize response array
    $response = array();
    
    if ($username_check_result && mysqli_num_rows($username_check_result) > 0) {
        // Username exists
        $row = mysqli_fetch_assoc($username_check_result);
        $databasePassword = $row['pass'];
        
        // Check if the password matches
        if ($databasePassword === $pwd) {
            // Both username and password are valid
            $response['valid_username'] = true;
            $response['valid_password'] = true;
            $response['data'] = $row; // Store user data
            
            // Fetch all data of the particular user
            $userId = $row['admin_id'];
            $userDataSql = "SELECT * FROM site_setting WHERE user_id = '$userId'";
            $userDataResult = mysqli_query($mysqli, $userDataSql);
            if ($userDataResult && mysqli_num_rows($userDataResult) > 0) {
                $userData = mysqli_fetch_assoc($userDataResult);
                $response['user_data'] = $userData;
            }
        } else {
            // Username is valid, but password is invalid
            $response['valid_username'] = true;
            $response['valid_password'] = false;
            $response['error'] = 'Invalid password';
        }
    } else {
        // Username is invalid
        $response['valid_username'] = false;
        $response['error'] = 'Invalid username';
        
        // Check if the password is invalid as well
        $password_check_sql = "SELECT pass FROM site_setting WHERE pass='$pwd'";
        $password_check_result = mysqli_query($mysqli, $password_check_sql);
        
        if ($password_check_result && mysqli_num_rows($password_check_result) > 0) {
            // Password is valid
            $response['valid_password'] = true;
        } else {
            // Both username and password are invalid
            $response['valid_password'] = false;
            $response['error'] .= ', Invalid password';
        }
    }
    
    echo json_encode($response);
} 
?>
