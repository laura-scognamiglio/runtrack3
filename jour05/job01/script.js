/*
JSON.parse('{"p": 5}', (key, value) => {
  if (typeof value === 'number') {
    return value * 2;  // renvoie value * 2 pour les nombres
  }
  return value;        // pour le reste, la valeur est inchangée
});

// { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    console.log(key);            // on affiche le nom de la propriété dans la console
    return value;                // et on renvoie la valeur inchangée.
});
*/

// var inputs = document.getElementById("form1").elements;
// var inputByIndex = inputs[2];
// var inputByName = inputs["login"];

// var request = new XMLHttpRequest();
// request.open("POST", "traitement.php");
// request.send(new FormData(formElement));


document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM entièrement chargé et analysé");

    
    
    var form = document.querySelector("form")
    // var inputs = document.getElementById("myForm")
    var button = document.getElementById("signupbtn")
    var name = document.getElementById("name")
    var surname = document.getElementById("surname")
    var email = document.getElementById("email")
    var password = document.getElementById("psw")
    var pass_repeat = document.getElementById("psw-repeat")
    // var form = document.getElementById('myForm')""
    // console.log(name)

    
    
    
    // name.addEventListener('keyup', function(){
        
        button.addEventListener('click', function(){
            
            var formData = new FormData(form)
            console.log('button')
            console.log(formData)
            // formData.append('login', name.value)
            fetch('traitement.php', {
            method: 'POST',
            body:formData,

        })
        .then(function (response) {
            return response.text();
          })
        .then(function (body) {
        console.log(body);
        });
        

   
    })

})