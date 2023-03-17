<?php

$servername = "localhost";
$username="Dario";
$password="Dario.2005";
$database="drustvenamreza";
//$conn = mysqli_connect('localhost','id19950585_pokusaj1','&QS1(glge6Uu71RB','id19950585_drustvenamreza');
//$conn = mysqli_connect('localhost','Dario','Dario.2005','drustvenamreza');
$conn = mysqli_connect($servername,$username,$password,$database);
if(!$conn){
    echo 'Connection error: '. mysqli_connect_error();
}

?>