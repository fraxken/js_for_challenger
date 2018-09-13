/**
 * NE PAS TOUCHEZ LE CODE CI-DESSOUS
 */
class Eleve {
    constructor(nom) {
        // Le nom de l'élève doit être une primitive "string"
        if (typeof nom !== "string") {
            throw new TypeError("nom argument should be a string!");
        }

        // Assigner le nom de l'élève
        this.nom = nom;

        // Aléatoirement choisir si l'élève est encore scolariser ou non.
        this.scolariser = Math.random() > 0.5 ? true : false;

        // Attribuer une noteMoyenne si l'élève est scolariser
        if (this.scolariser) {
            // Générer une noteMoyenne aléatoire entre 0 et 20 pour l'élève
            this.noteMoyenne = Math.floor( Math.random() * 20 ) + 1;
        }
    }
}

/**
 * Pour cet exercice vous devez:
 * 0. Si aucun élève n'est scolariser, passer à l'étape 3 directement !
 * 1. Calculer la moyenne de classe des élèves scolariser.
 * 2. Etablir un classement des élèves scolariser (avec leur noteMoyenne).
 * 3. Etablir la liste des élèves non scolariser.
 * 4. Afficher l'ensemble des résultats dans la console (le terminal).
 * 
 * NOTE:
 * - Il n'est pas nécessaire de re-créer une classe ou quoi ce soi de complexe.
 * - Si la notion "d'Objet" est encore trop complexe pour vous, passer à l'exercice suivant.
 */

/**
 * Liste des élèves
 */
const Eleves = [
    new Eleve("Thomas"),
    new Eleve("Alexandre"),
    new Eleve("Irvin"),
    new Eleve("Anthony"),
    new Eleve("Mark"),
    new Eleve("Bobby"),
    new Eleve("Martin"),
    new Eleve("Henry")
];

// Afficher les Elèves dans le terminal
console.log(Eleves);
