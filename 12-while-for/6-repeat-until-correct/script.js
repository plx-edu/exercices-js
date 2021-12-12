/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


let consigne = "Veuillez entrer un nombre supérieur à 100";0
function entry(){
      return prompt(consigne);
}

// null -> si l'utilisateur annule le prompt
let test = entry();
while(test <= 100 && test !== "" && test !== null){
      test = entry();
}

console.log("Fin de script!");

// while(entry() <= 100) {}

