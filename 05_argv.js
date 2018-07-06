/**
 * Exercice:
 * L'bjectif de récupérer la liste d'arguments de script au lancement avec process.argv
 * 
 * https://nodejs.org/docs/latest/api/process.html#process_process_argv
 * 
 * Exemple (sur mon ordinateur):
 * node 05_argv.js --arg1 --arg2
 * 
 * [ 'F:\\NodeJS\\node.exe',
 *   'F:\\Code\\exercices_js\\05_argv.js',
 *   '--arg1',
 *   '--arg2'
 * ]
 * 
 * L'objectif est donc de récupérer `arg1` et `arg2` sans les deux tirets du 6 devant et de les afficher dans la console. A noter
 * que le script doit fonctionner pour un nombre d'arguments supérieur à 2 ! 
 * 
 * Pour cet exercice il est conseillé de ce documenter sur les méthodes d'une String (sur MDN).
 */

// Afficher les arguments de script
console.log(process.argv);