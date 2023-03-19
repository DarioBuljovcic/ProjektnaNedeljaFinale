<?php
    include 'config.php';
    session_start();
    $id = $_SESSION['id'];
    $reciver = $_POST['id'];
    $sql = "SELECT * FROM conversation WHERE user_ids='|$id.$reciver|' OR user_ids='|$reciver.$id|' ORDER BY Id ";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            if($row['user_ids']=="|$id.$reciver|"){        
?>

<div class='single-msg-S' name="<?php echo $row['id']?>">
    <?php echo $row['messages']?>
</div>

<?php } else{ ?>
    
<div class='single-msg-R' name="<?php echo $row['id']?>">
    <?php echo $row['messages']?>
</div>

<?php } ?>
<?php }}?>


