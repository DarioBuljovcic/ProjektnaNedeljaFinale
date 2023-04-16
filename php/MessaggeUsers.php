<?php
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $sql = "SELECT * FROM users ORDER BY Id DESC";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0):
        while($row = mysqli_fetch_assoc($result)):
        if($row['Id']!=$id):
                      
?>
<div class ="msgReciver" name="<?php echo $row['Id']?>">
    <img src="img/<?php echo $row['img']?>" alt="" srcset="" id="searchimg">
    <h4><?php echo $row['username']?></h4>
</div>
<?php endif;endwhile;endif;?>