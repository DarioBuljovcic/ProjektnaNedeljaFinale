//connect to database
$conn = mysqli_connect('localhost','Dario','test1234','drustvenamreza');
//check the connection
if(!$conn){
    echo 'Connection error: '. mysqli_connect_error();
}
//ovo se obicno stavlja u novi fajl


//write query 
$sql =  'SELECT * FROM users ORDER BY Id';

 //make query and get results
$result = mysqli_query($conn,$sql);

// fetch the resulting rows as an array
$users = mysqli_fetch_all($result,MYSQLI_ASSOC);

mysqli_free_result($result);

//close connection 
mysqli_close($conn);

//show data with
echo htmlspecialchars($user['Username'])

//explode string to array
explode(' ',$user['Username'])

//sintaksa laksa, tako isto i za for moze
foreach(): endforeach; 

//save to database
