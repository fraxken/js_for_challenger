const { strictEqual } = require("assert");

/**
 * Compléter les tests suivants en remplaçant la valeur "null" par la bonne réponse.
 */
strictEqual("a" === "a", true);
strictEqual("5" === 5, null);
strictEqual("5" == 5, null);
strictEqual(true === false, null);
strictEqual(true == 1, null);
strictEqual(true + true == 2, null);
strictEqual(false + false == 1, null);
strictEqual("b" + "c", null);
strictEqual(typeof "a", null);
strictEqual(typeof 5, null);
strictEqual(typeof true, null);
strictEqual(typeof {}, null);
strictEqual(typeof [], null);
strictEqual(typeof undefined, null);
strictEqual(typeof null, null);
strictEqual({} instanceof Object, null);
strictEqual({} instanceof Array, null);
strictEqual(!(5 + 5 == 10), null);
strictEqual(isNaN("hello"), null);
strictEqual(isNaN(Number("lol")), null);
strictEqual(Boolean(1),  null);
strictEqual(Boolean(""),  null);
strictEqual([] + [],  null);
strictEqual(["b"] + ["a"],  null);