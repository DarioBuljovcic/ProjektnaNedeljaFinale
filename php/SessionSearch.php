<?php 
    include 'config.php';
    session_start();
    if(!isset($_SESSION))
        header('Location: index.php');
?>