/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


let a, b;

do {
      a = prompt("First number:", "a");
      a = parseFloat(a);
} while (!Number.isFinite(a));

do {
      b = prompt("Second number:", "b");
      b = parseFloat(b);
} while (!Number.isFinite(b));


// condition ? exprIfTrue : exprIfFalse
let result = (a + b == 4) ? 'Equal to' : ((a + b < 4) ? 'Below' : 'Over');
alert(`${a} + ${b} is ${result} 4`);



