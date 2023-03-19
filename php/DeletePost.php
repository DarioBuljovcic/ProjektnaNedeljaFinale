<?php 
    include 'config.php';
    session_start();
    $id = $_POST['id'];

    $sql = "DELETE FROM post WHERE id=$id";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo $result;
    } else{
        echo 0;
    }
?>