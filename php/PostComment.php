<?php 
    include 'config.php';
    session_start();
    $comment = $_POST['comment'];
    $id = $_SESSION['id'];
    $post_id = $_POST['post_id'];
    $sql = "INSERT INTO comments(comment,user_id,post_id) values ('$comment',$id,$post_id)";
    $result = mysqli_query($conn,$sql);
    $result = mysqli_fetch_assoc($result)
?>
<div class="single-comment">
    <span style="color:gray" id="usernamecom"><?php echo $_SESSION['username']?></span><?php echo $comment?> 
</div>