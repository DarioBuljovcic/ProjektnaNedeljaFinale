<?php 
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $sql = "SELECT SUM(likes) as likes,username FROM post GROUP BY username ORDER BY likes DESC LIMIT 5";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0):
        while($row = mysqli_fetch_assoc($result)):
            $username = $row['username'];
            $imgSql = "SELECT img FROM users WHERE username='$username'";
            $img = mysqli_query($conn,$imgSql);
            $img = mysqli_fetch_assoc($img);
            
?> 
<div class="top5Users">
    <img src="img/<?php echo $img['img']?>" alt="">
    <span id="userTop"><?php echo $row['username']?></span>
    <i class="fa-solid fa-star" id="goldstar"></i><span id="brlajkova"><?php echo $row['likes']?></span>
</div> 
<?php endwhile; endif;?>