/**
 * Exercice:
 * 
 * Simplifier (optimiser) au mieux le code suivant pour éviter les répétitions ! (Vous faites ce que vous voulez, pas de limite de pensé !)
 */

let moyenneA;
{
    const notes = [];
    for (let i = 0; i< 10; i++) {
        notes.push(Math.floor( Math.random() * 20 ) + 1);
    }
    let tMoy = 0;
    for (const note of notes) {
        tMoy += note;
    }
    moyenneA = tMoy / notes.length;
}
console.log(moyenneA);

let moyenneB;
{
    const notes = [];
    for (let i = 0; i< 10; i++) {
        notes.push(Math.floor( Math.random() * 20 ) + 1);
    }
    let tMoy = 0;
    for (const note of notes) {
        tMoy += note;
    }
    moyenneB = tMoy / notes.length;
}
console.log(moyenneB);

let moyenneC;
{
    const notes = [];
    for (let i = 0; i< 10; i++) {
        notes.push(Math.floor( Math.random() * 20 ) + 1);
    }
    let tMoy = 0;
    for (const note of notes) {
        tMoy += note;
    }
    moyenneC = tMoy / notes.length;
}
console.log(moyenneC);