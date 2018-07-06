/**
 * Module assert de Node.JS
 * 
 * Le module va nous permettre d'effectuer des assertions (des tests). Par exemple vérifié que deux variables ou expression
 * ont le même résult.
 * 
 * Exemple
 * const a = true;
 * assert.equal(a, true); // Vrai
 * assert.equal(a, false); // Faux (une Erreur sera généré)
 */
const assert = require("assert");

/**
 * Liens et ressources pouvant aider à la réalisation de cet exercice :
 * 1. https://dorey.github.io/JavaScript-Equality-Table/
 * 2. http://speakingjs.com/es5/ch01.html
 */

/**
 * Compléter les tests suivants (Etape 1).
 */
assert.equal("a" === "a", /* ? */);
assert.equal("5" === 5, /* ? */);
assert.equal("5" == 5, /* ? */);
assert.equal(true === false, /* ? */);
assert.equal(true == 1, /* ? */);
assert.equal(true + true == 2, /* ? */);
assert.equal(false + false == 1, /* ? */);
assert.equal("b" + "c", /* ? */);
assert.equal(typeof "a", /* ? */);
assert.equal(typeof 5, /* ? */);
assert.equal(typeof true, /* ? */);
assert.equal(typeof {}, /* ? */);
assert.equal(typeof [], /* ? */);
assert.equal(typeof undefined, /* ? */);
assert.equal(typeof null, /* ? */);
assert.equal({} instanceof Object, /* ? */);
assert.equal({} instanceof Array, /* ? */);

// Quitter le programme (retirer cet ligne pour l'étape 2).
process.exit(0);

/**
 * Compléter les tests suivant (Etape 2).
 */
assert.equal(!(5 + 5 == 10), /* ? */);
assert.equal(isNaN("hello"), /* ? */);
assert.equal(NaN === NaN, /* ? */);
assert.equal(Object.getPrototypeOf({}), /* ? */);
assert.equal(Object.getPrototypeOf(Object.create(null)), /* ? */);
assert.equal(Number("lol"), /* ? */);
assert.equal(Boolean(1),  /* ? */);
assert.equal(Boolean(""),  /* ? */);
assert.equal([] + [],  /* ? */);
assert.equal(["b"] + ["a"],  /* ? */);