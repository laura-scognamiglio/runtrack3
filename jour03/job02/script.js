var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$( document ).ready(function() {
    console.log( "rt!" );

    // $( ".carte" ).on( "click", function() {

    //    console.log(".carte")
    
    // });
    // var carte = 
    // var button = $("button")
    $(".carte").click(function() {
        console.log($(this).val)
       

    })
         
    
//    $('.carte').on('click', function(){
//        var data = $(this).attr('carte');
//        alert( data );
       
//        //var dataId = $(this).attr("data-id");
//        // alert("The data-id of clicked item is: " + dataId);
//     })
    
});

//? 0-rendre un element clickable + recup les info de l'elmt clické
//? 1-un bouton qui shuffle> math.order
//? 2-un happend to a élément. Click sur l'image => happened
//? 3-mettre/selectionné un attribue de l'élément 
//? 4-mttre un id qui correspond au num de l'image, img1 =id1 + addEventListener
//? 5-faire un happended puis un remove
//? 6-faire un comparatif sur les deux tableaux cad un tableau