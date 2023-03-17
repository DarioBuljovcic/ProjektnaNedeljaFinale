<?php 
    include 'config.php';
    session_start();
    $comment = $_POST['comment'];
    $id = $_SESSION['id'];
    $post_id = $_POST['post_id'];
    $sql = "INSERT INTO comments(comment,user_id,post_id) values ('$comment',$id,$post_id)";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo $comment;
    }else {
        echo 0;
    }
?>