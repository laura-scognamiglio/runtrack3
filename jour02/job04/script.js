
   document.addEventListener('DOMContentLoaded',(e) => {
    console.log("DOM entièrement chargé et analysé");

var textarea = document.getElementById("keylogger");

document.addEventListener("keypress", addCharacter);

function addCharacter(event) {
  textarea.value=textarea.value+event.key; 
}

});
//    .focus sur l'élément 
// mettre le domcontent qui doit TOUT englobé! 
//methode concat

// var texteArea = document.getElementById('keylogger')

//     document.addEventListener('keydown',function(event)
//     {
//          texteArea.value = texteArea.textcontent + event.key
//     })
    
    
    
        

    
