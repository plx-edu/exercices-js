/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/



let login = prompt("Are you: Employee, Director, Other ?", "...")
let message;

message = (login == 'Employee') ? 'Hello': // if
            ((login == 'Director') ? 'Greetings': // else if
            ((login == '') ? 'No login': // else if
            '...')); // else

alert(message);




