<?php


// var_dump('ergkjhkefjhkejhf');

$var = file_get_contents('php://input');

function getpdo(){
    $dns = 'mysql:host=localhost;dbname=utilisateurs';

            try{
                $pdo = new PDO($dns, 'root', 'root', 
                [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                //en fetch_assoc mode par defaut me permet d'avoir tous mes fetch all en fetch assoc 
                ]);
                // echo "connexion PDO opérationnelle !";
    
            } catch(PDOException $e){
                echo "error : " . $e->getMessage();
            }
            
            return($pdo);

}


// if(empty($getLg))
// {
//     echo $error['login'] = "<p class = error>Login is empty </p>";
// }

// elseif(count($users) != 0)
// {
//     echo $error['login_used'] = "<p class = error>Login is alredy used </p>";
// }




function insert()
{
    $bdd = getpdo();
    // $pw_hash = password_hash($getPw, PASSWORD_BCRYPT);

    $error = array();

    $email = $_POST['email'];

    $read = "SELECT * FROM utilisateurs WHERE `email`= $email";

    $select = $bdd->prepare($read);
    $select->fetchAll();

    


    $add = "INSERT INTO utilisateurs (`prenom`, `nom`, `email`, `password`) VALUES (:name, :surname, :email, :password)";
    
    $insert= $bdd->prepare($add);
    $insert->execute(array('name' => $_POST['name'],
    'surname' => $_POST['surname'],
    'email' => $_POST['email'],
    'password' => $_POST['password']
));


}

insert($_POST);

if(empty($_POST)){
        
    echo $error['post'] = "<p class = error>champs vides</p>";

    }
var_dump($_POST);
// var_dump($var);
// if(isset($_POST['name'])){
//     var_dump('GENIAL');
// }