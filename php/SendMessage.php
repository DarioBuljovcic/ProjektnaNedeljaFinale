<?php 
    include 'config.php';
    session_start();
    $msg = $_POST['msg'];
    $user_id = $_SESSION['id'];
    $reciver_id = $_POST['id'];
    $sql = "INSERT INTO conversation(user_ids,messages) values ('|$user_id.$reciver_id|','$msg')";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo 1;
    }else {
        echo $result;
    }
?>