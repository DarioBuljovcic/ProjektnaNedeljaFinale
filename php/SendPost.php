<?php 
    include 'config.php';
    session_start();
    $msg = $_POST['msg'];
    $id = $_POST['id'];
    $username = $_POST['username'];
    $sql = "INSERT INTO post(user_id,text,username) values ($id,'$msg','$username')";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo 1;
    }else {
        echo 0;
    }
?>