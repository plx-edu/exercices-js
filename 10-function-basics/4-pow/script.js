/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

showCalc(3, 2);
showCalc(3, 3);
showCalc(3, 1);
showCalc(1, 100);
showCalc(10, 0);
showCalc(-2, 2);
showCalc(-2, 3);
showCalc(-2, 3.2);

showCalc(+prompt("x", 2), +prompt("n", 2));

function pow(x, n){
      // Raisonnement: prendre en charge que 
      // les valeurs naturelles de n
      // (n - Math.trunc(n) === 0) vérification entiers
      // (n > 1) supérieurs à 1
      if((n > 1) && (n - Math.trunc(n) === 0)){
            return x ** n;
      }

      return "\n /!\\ La fonction, pow(x, n), ne prend en charge que les valeurs naturelles de n"
            + " (entiers supérieurs à 1).";
}

function showCalc(a, b){
      console.log(`pow(${a}, ${b}) = ${pow(a, b)}`);
}