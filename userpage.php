<?php 
    include 'php/config.php';
    session_start();
    $username = base64_decode($_GET['username']);
    $email = base64_decode($_GET['email']);
    $id = base64_decode($_GET['id']);
    $imgSql = "SELECT img FROM users WHERE Id=$id";
    $img = mysqli_query($conn,$imgSql);
    $img = mysqli_fetch_assoc($img)['img'];
    $idMain = $_SESSION['id'];
    $imgSql = "SELECT img FROM users WHERE Id=$idMain";
    $imgUser = mysqli_query($conn,$imgSql);
    $imgUser = mysqli_fetch_assoc($imgUser)['img'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Grape+Nuts&family=Kanit&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/9310e1148a.js" crossorigin="anonymous"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="userpage.css">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" 
            integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" 
            crossorigin="anonymous">
    </script>
    <script src="js/UserPage.js"></script>
    <title>User</title>
</head>
<body>
    <div class="overlay"></div>
    <div class="navsearch">
        <h2><a href="hexa.php">Projektna <span>nedelja</span></a></h2>
        <input type="text" placeholder="Pretrazite" id="search-input">
        <button id="aa"><i class="fa-solid fa-magnifying-glass"></i></button>
        <div class="divimg">
        <img src="img/<?php echo $imgUser?>" width="100%" class="navimg" alt="" srcset="">
        </div>
    </div>
    <div class="loadScreen">
        <img src="img/load.svg" alt=“blankimage”>
    </div> 
    <h3 id="userneki"></h3>
      
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                    <div class="inner-container left-side">
                        <img src="img/<?php echo $img?>" alt="" class="profile">
                
                        <p><b id="username" name="<?php echo $id?>"><?php echo $username?></b></p>
                        <p id="email"><?php echo $email?></p>

                        <button id="userpagemsg">Message</button>
                    </div>
                    <section class="conversation">
                        <button class="closeBtn closeConv"><i class="fa-regular fa-x"></i></button>
                        <div class="messages"></div>
                        <div class="controls">
                            <input type="text" class="msg" placeholder="New message">
                            <button class="sendMsg"> <i class="fa-sharp fa-solid fa-paper-plane"></i></button>
                        </div>
                    </section>
            </div>
        
       
            <div class="col-md-9">
                <div class="inner-container right-side">
                    <div id="allPostsWrapper"></div>
                </div>
            </div>
        </div>
    </div>


    <script src="js/Session.js"></script>    
    <script src="js/AllPages.js"></script>
</body>
</html>