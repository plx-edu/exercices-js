/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let age = 0;

console.log("(age > 18) ?");
console.log("Variant with ||");
age = '0';
console.log(` - For age ${age}:\n    ${checkAge1(age)}`);
age = '19';
console.log(` - For age ${age}:\n    ${checkAge1(age)}`);
age = null;
console.log(` - For age ${age}:\n    ${checkAge1(age)}`);


console.log("Variant with ?");
age = NaN;
console.log(` - For age ${age}:\n    ${checkAge2(age)}`);
age = "A";
console.log(` - For age ${age}:\n    ${checkAge2(age)}`);
age = 42;
console.log(` - For age ${age}:\n    ${checkAge2(age)}`);


function checkAge1(age) {
      return (age > 18) || 'Did parents allow you?';
}

function checkAge2(age) {
      return (age > 18) ? true : 'Did parents allow you?';
}



