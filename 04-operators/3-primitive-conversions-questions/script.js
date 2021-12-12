/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


var dict = {
      "\"\" + 1 + 0": "" + 1 + 0,
      "\"\" - 1 + 0": "" - 1 + 0,
      "true + false": true + false,
      "6 / \"3\"": 6 / "3",
      "\"2\" * \"3\"":"2" * "3",
      "4 + 5 + \"px\"": 4 + 5 + "px",
      "\"$\" + 4 + 5": "$" + 4 + 5,
      "\"4\" - 2": "4" - 2,
      "\"4px\" - 2": "4px" - 2,
      "\"  -9  \" + 5": "  -9  " + 5,
      "\"  -9  \" - 5": "  -9  " - 5,
      "null + 1": null + 1,
      "undefined + 1": undefined + 1,
      "\" \\t \\n\" - 2": " \t \n" - 2
}

console.log("******************************************");
for(i in dict){
      console.log("expression: "+i+" - résultats: "+dict[i]);
}
console.log("******************************************");



