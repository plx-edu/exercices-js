/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


let n = +prompt("Entrer un nombre", 10);


next:
for(let i = 2; i <= n; i++){
      for(let j = 2; j < i; j++){
            if(i % j === 0) {
                  continue next;
            }
      }
      console.log(i);
}


