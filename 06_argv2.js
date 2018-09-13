/**
 * Exercice:
 * Même principe que pour l'exercice précédent, mais cet fois ci vous allez devoir lié une clé à une valeur.
 * 
 * Exemple:
 * node 05_argv.js --arg1 hello --arg2 world --arg3
 * 
 * L'objectif est donc de récupérer et corréler les arguments avec des valeurs (ou un boolean si aucune valeur n'est présente).
 * 
 * Il faut donc produire un object à l'aide des arguments de lancement, le résultat de fin sera comme ci-dessous:
 * {
 *     arg1: "hello",
 *     arg2: "world",
 *     arg3: true
 * }
 * 
 * Pour cet exercice il est conseillé de se documenter sur les Objets et les Boucles
 */

 // Afficher les arguments de script
console.log(process.argv);