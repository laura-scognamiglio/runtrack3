/*
 Créez une balise button ayant comme id “button”. En cliquant sur le
bouton, vous devrez faire apparaître le texte “le $ est un bon élément
monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
classe pour cacher cet élément. ”.
En dessous faire un bouton qui servira à cacher tout l’élément html.
*/
// import $ from "jquery";

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$( document ).ready(function() {
    console.log( "ready!" );
    $('#button').on('click', function(){
        $('html').hide()
    })


});