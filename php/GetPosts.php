<?php
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $limit = $_POST['limit'];
    $rowNum=5;
    $sql = "SELECT * FROM post ORDER BY Id DESC LIMIT $limit";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            $user_id = $row['user_id'];
            $imgSql = "SELECT img FROM users WHERE Id=$user_id";
            $img = mysqli_query($conn,$imgSql);
            $img = mysqli_fetch_assoc($img);
            
?>
<div class='single-post' name="<?php echo $row['Id']?>">
<div class='post-content'><?php echo $row['text']?></div>
    <div class='post-actions'>
        <p><b><img src= "img/<?php echo $img['img']?>" width='4%' id='posttimg'></b> <?php echo $row['username']?></p>
        <div>
            <?php if(str_contains($row['likes_id'],$id)){?>
                <button onclick="likeDislike(this)" class="likePostJS like-btn likedPost" aria-pressed="true"><span></span><div class="numCount"><div class="num1Count" style="transform: translateY(50px);"><?php echo $row['likes']-1?></div><div class="num2Count" style="transform: translateY(0px);"><?php echo $row['likes']?></div></div></button>
            <?php }else {?>
                <button onclick="likeDislike(this)" class="likePostJS like-btn" aria-pressed="false"><span></span><div class="numCount"><div class="num1Count" style="transform: translateY(0px);"><?php echo $row['likes']?></div><div class="num2Count" style="transform: translateY(-50px);"><?php echo $row['likes']+1?></div></div></button>
            <?php } ?>
            
            <button onclick="commentUpDown(this)" class='comment-btn' aria-pressed="false"><span id='cspan'><?php 
                $post_id = $row['Id'];
                $sql = "SELECT count(post_id) as num FROM comments WHERE post_id=$post_id";
                $result2 = mysqli_query($conn,$sql);
                $row2 = mysqli_fetch_assoc($result2);
                echo $row2['num'];
                ?>
            </span></button>
            
            <?php if($id == $row['user_id']){?>
                <button id="removePost" class='remove-btn' ><i class='fa-regular fa-x'></i></button>
            <?php }?>

        </div>
    </div>
    <div class='post-comments'>
        <form >
            <input class= "commentValue" type='text' placeholder='Napisi komentar...'>
            <button id="postComment" class="postComment">Comment</button>
        </form>
            <?php
            $post_id = $row['Id'];
            $sql = "SELECT ALL* FROM comments WHERE post_id=$post_id ORDER BY post_id  ";
            $result2 = mysqli_query($conn,$sql);
        
            if(mysqli_num_rows($result2)>0){
            while($row2 = mysqli_fetch_assoc($result2)){
                $userId = $row2['user_id'];
                $sql = "SELECT username FROM users WHERE Id=$userId";
                $result3 = mysqli_query($conn,$sql);
                $username = mysqli_fetch_assoc($result3)['username'];
            ?>
                <div class="single-comment">
                    <span style="color:gray" id="usernamecom"><?php echo $username?></span><?php echo $row2['comment']?> 
                </div>
            <?php }}?>
    </div>
</div>
<?php }}?>
<button class="loadMore" name="<?php echo $limit + $rowNum?>">LoadMore</button>


