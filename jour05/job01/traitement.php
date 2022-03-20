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

// $pw_hash = password_hash($getPw, PASSWORD_BCRYPT);
// $sql = "INSERT INTO {$this->table} (`login`, `password`) VALUES (:login , :password)";

// $insert = $this->pdo->prepare($sql);
// $insert->execute(array(
//     ":login" => $getLg, 
//     ":password" => $pw_hash ));



function insert()
{
    $bdd = getpdo();

    $query = "INSERT INTO utilisateurs (`prenom`, `nom`, `email`, `password`) VALUES (:name, :surname, :email, :password)";

    $insert= $bdd->prepare($query);
    $insert->execute(array('name' => $_POST['name'],
        'surname' => $_POST['surname'],
        'email' => $_POST['email'],
        'password' => $_POST['password']
));

    // var_dump($insert);


}

insert($_POST);
var_dump($_POST);
// var_dump($var);
// if(isset($_POST['name'])){
//     var_dump('GENIAL');
// }