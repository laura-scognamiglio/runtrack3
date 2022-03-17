/*
Créez un button ayant comme id “button”. Créez un fichier expression.txt
contenant votre expression favorite. Lorsqu’un utilisateur clique sur le
bouton, à l’aide de Fetch, récupérez le contenu du fichier expression.txt,
placez le dans un paragraphe et insérez le dans le corps de votre page.
*/


// document.addEventListener('DOMContentLoaded', function(event) {
//     fetch('ajax-content.php')
//     .then(function (response) {
//         return response.text()
//     })
//     .then(function (html) {
//         console.info('content has been fetched from data.html');
//         loadData(html, '#ajax-target').then(function (html) {
//             console.info('I\'m a callback');
//         })
//     }).catch((error) => {
//         console.log(error);
//     });
// });

document.addEventListener('DOMContentLoaded',(event) => {
    console.log("DOM entièrement chargé et analysé");

    
    
    var but = document.getElementById('button')
    var p = document.createElement('p');
    var main = document.querySelector('body');
  
    but.addEventListener('click', function show()
    {
      
        fetch('expression.txt')
        .then(response => response.text()) 
        .then(textString => {
                main.append(p);
                p.append(textString);
                console.log(textString);
        })
            
            // document.body.innerHTML = response.text();
            // une instruction return pour retourner response.text(), 
            // et ce résultat est passé au prochain .then().
            // return response.text()
    
        
        // .then(function(reponse){

        // })
        // //mettre une methode append
        
        // .catch((error) => {
        //     console.log(error);
        // });
        
    })

    
    
});