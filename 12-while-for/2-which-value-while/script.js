/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/*
Avis avant lancement:
valeur comparaison -> valeur alert

Prefix ++i:
1 -> 1
2 -> 2
3 -> 3
4 -> 4
5 -> sortie de boucle

Postfix i++:
0 -> 1
1 -> 2
2 -> 3
3 -> 4
4 -> 5
5 -> sortie de boucle
*/

// Réponse:
console.log("Prefix -> ++i:")
let i = 0;
while (++i < 5) console.log( i );

console.log("Postfix -> i++:")
i = 0;
while (i++ < 5) console.log( i );





