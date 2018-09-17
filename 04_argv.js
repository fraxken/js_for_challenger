/**
 * @desc
 * L'objectif est de récupérer la liste d'arguments de script au lancement avec process.argv
 * 
 * @tutorial
 * https://nodejs.org/docs/latest/api/process.html#process_process_argv
 * 
 * @example
 * node 05_argv.js --arg1 --arg2
 * 
 * [ 'F:\\NodeJS\\node.exe',
 *   'F:\\Code\\exercices_js\\05_argv.js',
 *   '--arg1',
 *   '--arg2'
 * ]
 * 
 * @todo
 * L'objectif est donc de récupérer `arg1` et `arg2` sans les deux tirets du 6 devant et de les afficher dans la console.
 * 
 * @see
 * Le script doit fonctionner pour un nombre d'arguments dynamique.
 */

// Afficher les arguments de script
console.log(process.argv);