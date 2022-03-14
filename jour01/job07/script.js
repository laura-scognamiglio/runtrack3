

function jourtravaille(date)
{
  var today = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  jour_ferie = ['mercredi 1 janvier 2020', 'lundi 13 avril 2020', 'vendredi 1 mai 2020','vendredi 8 mai 2020', 'jeudi 21 mai 2020', 'lundi 1 juin 2020', 'mardi 14 juillet 2020', 'samedi 15 août 2020', 'dimanche 1 novembre 2020', 'mercredi 11 novembre 2020', 'vendredi 25 décembre 2020']

  var oggi = today.toLocaleDateString('fr-FR', options);
  today.setUTCFullYear(2020);
  

  if(jour_ferie.includes(oggi)){
    console.log("Le "+ oggi + " est un jour férié ")
  }
  else if(today.getDay() == 0 || today.getDay() == 6)
  {
    console.log("Le "+ oggi + " est un week-end")
  
  }
  else 
  {
    console.log("Le "+ oggi + " est un jour travaillé")
    
  }
//   function in_array(needle, haystack) {
//     for(var i in haystack) {
//         if(haystack[i] == needle) return true;
//     }
//     return false;
// }
// arr.includes(searchElement)

 


}

jourtravaille("12/26/2020");