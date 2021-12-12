/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


let a = prompt("Quel est le nom \"officiel\" de JavaScript?", "Ma réponse");
let reponse = "ECMAScript"

if(a == reponse) alert("Bonne réponse !");
else if(a.toLowerCase() == reponse.toLowerCase()) alert("Attention à la capitalisation! Bonne réponse.");
else alert(`Ne sait pas ? ${reponse}!`);


