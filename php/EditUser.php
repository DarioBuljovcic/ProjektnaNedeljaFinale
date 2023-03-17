<?php 
    include 'config.php';   
    session_start(); 
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $id = $_SESSION['id'];
    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;
    $sql = "UPDATE users set email = '$email',username = '$username',password='$password' WHERE Id = $id;";    
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE post set username = '$username' WHERE username_id = $id;";
    $result = mysqli_query($conn,$sql);
?>