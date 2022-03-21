

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="style1.css" rel="stylesheet" type="text/css" media="screen">
    <link href="style2.css" rel="stylesheet" type="text/css" media=" screen and (min-width:1680px) and (max-width:1920px)">
    <link href="style3.css" rel="stylesheet" type="text/css" media="screen and (min-width:1280px) ">
    <link href="style4.css" rel="stylesheet" type="text/css" media="screen and (max-width:1280px)">
    <script type="text/javascript" src="script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="" methode = "post" id="myForm">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>
    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter a name" name="name" id="name">

    <label for="surname"><b>Surname</b></label>
    <input type="text" placeholder="Enter a surname" name="surname" id="surname" >

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email">

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="psw" >
    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat">

    <button type="button" id="signupbtn" name="myBtn">Sign Up</button>
    
  </div>
</form>
</body>
</html>
