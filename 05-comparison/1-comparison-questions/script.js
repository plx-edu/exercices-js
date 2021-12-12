/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

var dict = {
      "5 > 4": 5 > 4,
      "\"apple\" > \"pineapple\"": "apple" > "pineapple",
      "\"2\" > \"12\"": "2" > "12",
      "undefined == null": undefined == null,
      "undefined === null": undefined === null,
      "null == \"\\n0\\n\"": null == "\n0\n",
      "null === +\"\\n0\\n\"": null === +"\n0\n"
}

console.log("**********************************************");
for(i in dict){
      console.log("expression: "+i+" - résultats: "+dict[i]);
}
console.log("**********************************************");




