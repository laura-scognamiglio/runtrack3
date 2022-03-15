
// elem.onclick = function(ev) {console.log(this);}
// elemm.onclick = function() { alert('blah'); };


// btn.addEventListener('click', function handleClick() {
//   if (box.style.visibility === 'hidden') {
//     box.style.visibility = 'visible';

//     btn.textContent = 'Hide div';
//   } else {
//     box.style.visibility = 'hidden';

//     btn.textContent = 'Show div';
//   }
// });

// function showhide()
// {

// mettre le domcontent qui doit TOUT englobé! 
    document.addEventListener('DOMContentLoaded',(event) => {
        console.log("DOM entièrement chargé et analysé");
        
        var article = document.getElementById('showHide')
        console.log(article)
        var but = document.getElementById('button')
        
        article.style.visibility = 'hidden'
        
        
        but.addEventListener('click', function showhide()
        {
            if (article.style.visibility === 'hidden')
            {
                article.style.visibility = 'visible'
                // but.textContent = 'Hide'
            }
            else
            {
                article.style.visibility = 'hidden'
            }
        })
        
    });
    
// }