/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

// Personal note:
// "let" doesn't seem necessary,
// why use it ?
let ask = (question, yes, no) => (confirm(question)) ? yes() : no();
   
ask(
      "Do you agree?",
      () => alert("You agreed."),
      () => alert("You canceled the execution.")
);


