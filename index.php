<?php
    include 'php/config.php';
    session_start();
    if(isset($_SESSION['id'])){
       header('Location: hexa.php');
    }

    if(isset($_POST['Login'])){       
        if($_POST['Login'] == "true")
        {
            $email = mysqli_real_escape_string($conn,$_POST['email']);
            $password = mysqli_real_escape_string($conn,$_POST['lozinka']);
            $sql =  'SELECT * FROM users ORDER BY Id';
            $result = mysqli_query($conn,$sql);
            $users = mysqli_fetch_all($result,MYSQLI_ASSOC);
            mysqli_free_result($result);
            foreach($users as $user)
            {
                if($user['email']== $email && $user['password']== $password)
                {
                    session_start([
                        'cookie_lifetime' => 86400*15,
                    ]);
                    $_SESSION['username'] = $user['username'];
                    $_SESSION['email'] = $user['email'];
                    $_SESSION['id'] = $user['Id'];
                    //header('Location: https://ultracountdown.000webhostapp.com/hexa.php');
                    header('Location: ./hexa.php');

                }

            }
        }
    } if(isset($_POST['Register'])){
        if($_POST['Register'] == "true")
        {
            $email = mysqli_real_escape_string($conn,$_POST['email']);
            $username = mysqli_real_escape_string($conn,$_POST['username']);
            $password = mysqli_real_escape_string($conn,$_POST['password']);
            $sql = "INSERT INTO users(username,email,password) values ('$username','$email','$password')";
            if(mysqli_query($conn,$sql)){
                session_start([
                    'cookie_lifetime' => 86400*15,
                ]);
                $_SESSION['username'] = $user['username'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['id'] = $user['Id'];
                //header('Location: https://ultracountdown.000webhostapp.com/hexa.php');
                header('Location: ./hexa.php');
            }

        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styleIndex.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Grape+Nuts&family=Kanit&display=swap" rel="stylesheet">

    <title>Hexa</title>
</head>
<body>
    <div id="particles-js">

    </div>
    <!-- <div class="logo">
        <img src="img/logo.png" alt="" srcset="">
    </div> 
     <h1 id="drmrezatekst">Drustvena mreza namenjena hakerima</h1> -->
    <h1 id="naslovind">Projektna <span style="color: #4d547a;">nedelja</span></h1>
     <h2 id="drmr">Drustvena mreza <span id="drmrezatekst"></span></h2>

    <div class="wrapper-max">
        <div class="main-wrapper">
            <form id="loginForm" class="loginForm" method="post" action="index.php" >
                <h2 id="logint">Login</h2>
                <p id="ulg">Uloguj se u svoj nalog</p>

            <div>
                <!-- <label>Email:</label>  -->
                <input type="email" name="email" id="login_email" placeholder="Email adress">
            </div>

            <div>
                <!-- <label>Lozinka:</label> -->
                <input type="password" name="lozinka" id="login_lozinka" placeholder="Password">
            </div>
            
            <div>
                <button id="btn" type="submit" name="Login" value="false">Uloguj se</button>
            </div>
        </form>
    </div>
    <div class="main-wrapper registerContainer">
        <form id="registrationForm" method="POST" action="index.php">
            <h2 id="reghd">Registracija korisnika</h2>
            <p id="ulg" style="margin-top: -29px;margin-bottom: 13px;">Kreiraj novi nalog</p>
            <div>
                <!-- <label for="korisnicko_ime">Korisnicko ime: *</label> -->
                <input type="text" id="korisnicko_ime" name="username" placeholder="Username">
            </div>

                <div>
                    <!-- <label for="email">Email adresa: *</label> -->
                    <input type="text" id="email" name="email" placeholder="Email adress">
                </div>

                <div>
                    <!-- <label for="lozinka">Lozinka: *</label> -->
                    <input type="password" id="lozinka" name="password" placeholder="Password">
                </div>

                <div>
                    <!-- <label for="ponovi_lozinku">Ponovi lozinku: *</label> -->
                    <input type="password" id="password2" name="password2" placeholder="Confirm password">
                </div>

                <div>
                    <button id="btn" type="submit" name="Register" value="false">Registruj se</button>
                </div>
            </form>
        </div> 
        <div class="no-acc-register">
            <p>or</p>
            <button id="registracija">Registruj se</button>
        </div>
    </div>
    <script src="particles.js"></script>
    <script src="app.js"></script>
    <script src="js/Validator.js"></script>
    <script src="js/app.js"></script>
    <script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed("#drmrezatekst",{
        strings: ["namenjena hakerima"],
        typeSpeed:100,
        backSpeed:100,
        loop:true
    });

    </script>
</body>
</html>