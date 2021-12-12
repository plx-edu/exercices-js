/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let a = prompt("Veuillez entrer en numéro");
let b = a;

// Conversion de valeurs en nombres
a = parseFloat(a);

// Si une ou toutes les valeurs sont des nombres, afficher le résultat
// Sinon, afficher le message d'erreur
if(Number.isFinite(a)){
      if(a > 0) alert(1);
      else if(a < 0) alert(-1);
      else alert(0);
} else{
      alert(`La valeur [${b}] est invalide`);
}
