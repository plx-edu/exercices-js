/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

let c = `${a} + ${b} = `

// Conversion de valeurs en nombres
a = parseFloat(a);
b = parseFloat(b);

// Si une ou toutes les valeurs sont des nombres, afficher le résultat
// Sinon, afficher le message d'erreur
if(Number.isFinite(a) && Number.isFinite(b)){
      alert(c + (a + b));
} else{
      alert(c + "Valeur(s) invalide(s).");
}




