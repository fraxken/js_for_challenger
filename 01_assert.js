/**
 * Module assert de Node.JS
 * 
 * Le module va nous permettre d'effectuer des assertions (des tests). Par exemple vérifié que deux variables ou expression
 * ont le même résult.
 * 
 * Exemple
 * const a = true;
 * assert.strictEqual(a, true); // Vrai
 * assert.strictEqual(a, false); // Faux (une Erreur sera généré)
 * 
 * https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message
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
assert.strictEqual("a" === "a", /* ? */);
assert.strictEqual("5" === 5, /* ? */);
assert.strictEqual("5" == 5, /* ? */);
assert.strictEqual(true === false, /* ? */);
assert.strictEqual(true == 1, /* ? */);
assert.strictEqual(true + true == 2, /* ? */);
assert.strictEqual(false + false == 1, /* ? */);
assert.strictEqual("b" + "c", /* ? */);
assert.strictEqual(typeof "a", /* ? */);
assert.strictEqual(typeof 5, /* ? */);
assert.strictEqual(typeof true, /* ? */);
assert.strictEqual(typeof {}, /* ? */);
assert.strictEqual(typeof [], /* ? */);
assert.strictEqual(typeof undefined, /* ? */);
assert.strictEqual(typeof null, /* ? */);
assert.strictEqual({} instanceof Object, /* ? */);
assert.strictEqual({} instanceof Array, /* ? */);

// Quitter le programme (retirer cet ligne pour l'étape 2).
process.exit(0);

/**
 * Compléter les tests suivant (Etape 2).
 */
assert.strictEqual(!(5 + 5 == 10), /* ? */);
assert.strictEqual(isNaN("hello"), /* ? */);
assert.strictEqual(NaN === NaN, /* ? */);
assert.strictEqual(Object.getPrototypeOf({}), /* ? */);
assert.strictEqual(Object.getPrototypeOf(Object.create(null)), /* ? */);
assert.strictEqual(Number("lol"), /* ? */);
assert.strictEqual(Boolean(1),  /* ? */);
assert.strictEqual(Boolean(""),  /* ? */);
assert.strictEqual([] + [],  /* ? */);
assert.strictEqual(["b"] + ["a"],  /* ? */);