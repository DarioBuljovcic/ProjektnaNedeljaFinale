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
                $sql = "SELECT img FROM users WHERE Id= $id";
                $imgU = mysqli_query($conn,$sql);
                $imgU = mysqli_fetch_assoc($imgU)['img'];   
?>

<div class='single-msg-S .single-msg' name="<?php echo $row['id']?>">
    
    <div class="msgText" style="background-color: #424868;">  <?php echo $row['messages']?> </div>
    <img src="img/<?php echo $imgU?>" alt="img of the user" class="msgImg">

</div>


<?php } else{ 
        $sql = "SELECT img FROM users WHERE Id=$reciver";
        $imgR = mysqli_query($conn,$sql);
        $imgR = mysqli_fetch_assoc($imgR)['img']; 
    ?>
    
<div class='single-msg-R .single-msg' name="<?php echo $row['id']?>">
    <img src="img/<?php echo $imgR?>" alt="img of the user" class="msgImg">
    <div class="msgText" style="background-color: rgba(101, 187, 253, 0.373);">  <?php echo $row['messages']?> </div>   
</div>

<?php } ?>
<?php }}?>


