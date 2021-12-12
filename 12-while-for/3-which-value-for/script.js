/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/*
Fonctionnement d'une boucle for:
→ (if condition → run body and run step)
→ (if condition → run body and run step)

Avis avant lancement:
les deux formes (prefix & postfix)
donneront le même résultat:
0
1
2
3
4
*/

// Réponse:
console.log("Prefix -> ++i:")
for (let i = 0; i < 5; ++i) console.log( i );

console.log("Postfix -> i++:")
for (let i = 0; i < 5; i++) console.log( i );

