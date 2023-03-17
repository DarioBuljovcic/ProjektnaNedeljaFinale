<?php 
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $msg = $_POST['msg'];

    $sql = "DELETE FROM post WHERE user_id=$id and text='$msg'";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo $result;
    } else{
        echo 0;
    }
?>