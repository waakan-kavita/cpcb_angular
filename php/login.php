<?php

include_once("db.php");
//privious working code without otp generate and authntication////////// 

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$pwd = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->username));
$sql = "SELECT email,`password` FROM users where email='$email' and password='$pwd'";
//$sql = "select admin_id,username,pass,user_type,name,email from site_setting where username='$email' and pass='$pwd'";
    
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}




// Function to generate OTP
// function generateOTP() {
//     return rand(1000, 9999); // Generate a random 4-digit OTP
// }

// // Function to send OTP
// function sendOTP($email, $otp) {
//     // Your email sending logic using PHP's mail() function or a library like PHPMailer

//     // Subject
//     $subject = 'Your OTP for login';

//     // Message
//     $message = 'Your OTP is: ' . $otp;

//     // Additional headers
//     $headers = 'From: your-email@waakan.com' . "\r\n" .
//                'Reply-To: your-email@example.com' . "\r\n" .
//                'X-Mailer: PHP/' . phpversion();

//     // Send email
//     if (mail($email, $subject, $message, $headers)) {
//         return true; // Email sent successfully
//     } else {
//         return false; // Failed to send email
//     }
// }

// // Handle the incoming request
// $postdata = file_get_contents("php://input");
// $request = json_decode($postdata);

// if(isset($postdata) && !empty($postdata)) {
//     $username = trim($request->username);
//     $pass = trim($request->pass);
//     $email = trim($request->email);
                 
//     if($username && $pass && $email) {
//         //$sql = "SELECT site_setting.username,site_setting.admin_id, site_setting.status,site_setting.user_type,user_email_id_mapping.admin_id,user_email_id_mapping.email FROM site_setting,user_email_id_mapping where site_setting.admin_id = user_email_id_mapping.admin_id and site_setting.username='".$username."'and site_setting.pass='".$pass."' and user_email_id_mapping.email='".$email."'";
//         $ptr_site_setting = mysqli_query($con1, $sql);
//         $count = mysqli_num_rows($ptr_site_setting);
        
//         if($count) {
//             $fetch_email = mysqli_fetch_array($ptr_site_setting, MYSQLI_ASSOC);
//             $otp = generateOTP();
            
//             if(sendOTP($fetch_email['email'], $otp)) {
//                 echo json_encode(array("message" => "OTP sent successfully.", "otp" => $otp));
//             } else {
//                 http_response_code(500);
//                 echo json_encode(array("error" => "Failed to send OTP."));
//             }
//         } else {
//             http_response_code(404);
//             echo json_encode(array("error" => "User not found."));
//         }
//     } else {
//         http_response_code(400);
//         echo json_encode(array("error" => "Incomplete data."));
//     }
// }
?>
