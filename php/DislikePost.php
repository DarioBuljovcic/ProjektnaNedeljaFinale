<?php 
    include 'config.php';
    session_start();
    $id = $_POST['id'];
    $likes = $_POST['likes'];
    $sql = "SELECT * FROM post WHERE Id = $id";
    $likesId = mysqli_query($conn,$sql);
    if (mysqli_num_rows($likesId) > 0){
        while($rowData = mysqli_fetch_assoc($likesId)){
            $end= str_replace('|'.$_SESSION['id'].'|','',$rowData['likes_id']);
        }
    }
    $sql = "UPDATE post set likes = $likes,likes_id = '$end' WHERE Id = $id;";
    
    $result = mysqli_query($conn,$sql);
    echo $result;
?>