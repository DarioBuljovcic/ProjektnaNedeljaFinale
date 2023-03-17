<?php
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $text = $_POST['username'];
    $sql = "SELECT * FROM users ORDER BY Id DESC ";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0):
        while($row = mysqli_fetch_assoc($result)):
        if($row['Id']!=$id && str_contains($row['username'],$text)):          
?>
<div class ="singleitemsearchh">
    <img src="img/profile2.jpg" alt="" srcset="" id="searchimg">
    <h4><?php echo $row['username']?></h4>
    <p><?php echo $row['email']?></p>
</div>
<?php endif;endwhile;endif;?>


