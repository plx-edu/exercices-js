/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

showCalc(2, 5);
showCalc(3, -1);
showCalc(1, 1);
showCalc(-0.01, 0);

function min(a, b){
      // Si a n'est pas inférieur à b,
      // b ne peut être qu'inférieur ou égal.
      return (a < b) ? a : b;
}

function showCalc(a, b){
      console.log(`min(${a}, ${b}) = ${min(a, b)}`);
}