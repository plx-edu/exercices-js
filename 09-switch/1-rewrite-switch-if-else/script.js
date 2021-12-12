/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let browser = prompt("Enter name of your browser:", "Firefox");
//console.log(browser);

if(browser === "Edge"){
      console.log("You've got the Edge!");
}else if(browser === "Chrome"
            || browser === "Firefox"
            || browser === "Safari"
            || browser === "Opera"){

      console.log('Okay we support these browsers too');
}else{
      console.log( 'We hope that this page looks ok!' );
}





