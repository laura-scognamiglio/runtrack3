

// mettre le domcontent qui doit TOUT englobé! 
    document.addEventListener('DOMContentLoaded',(event) => {
        console.log("DOM entièrement chargé et analysé");
        
        var article = document.getElementById('compteur')
        console.log(article)
        var but = document.getElementById('button')
        //declarer var count
        //inner html 
        var count = 0;
       function updateDisplay()
            {
                article.innerHTML = count;
            };
        but.addEventListener('click', function addone()
        {

            count++;
            updateDisplay();
            
        })

        
        
    });
    
// }