<?php
    include 'config.php';
    session_start();
    $username = $_POST['username'];
    $sql = "SELECT * FROM users WHERE username LIKE '%$username%' ORDER BY id DESC ";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0):
        while($row = mysqli_fetch_assoc($result)):
        if($row['Id']!=$id):
                      
?>
<div class ="singleitemsearchh" name="<?php echo $row['Id']?>">
    <img src="img/<?php echo $row['img']?>" alt="" srcset="" id="searchimg">
    <h4><?php echo $row['username']?></h4>
    <p><?php echo $row['email']?></p>
    <i class="fa fa-paper-plane-o" style="position:absolute;right:20px;bottom:20px;"></i>
</div>
<?php endif;endwhile;endif;?>