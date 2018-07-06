// Class (Object) voiture
class Voiture {
    constructor(marque, couleur) {
        if (typeof nom !== "string") {
            throw new TypeError("L'argument nom doit être impérativement une primitive de type string");
        }
        if (!Voiture.CouleursDisponible.has(couleur)) {
            throw new TypeError("Couleur de la voiture invalide!");
        }
        this.marque = marque;
        this.couleur = couleur;
        this.prix = Math.floor( Math.random() * 60000 ) + 1;
    }
}

// Couleurs disponible pour une Voiture
Voiture.CouleursDisponible = new Set("bleue", "rouge", "vert", "blanc");

// Liste des voitures en vente !
const VoituresEnVente = [
    new Voiture("Dodge", "rouge"),
    new Voiture("Dodge", "rouge"),
    new Voiture("Dodge", "blanc"),
    new Voiture("Dodge", "bleue"),
    new Voiture("Citroen", "vert"),
    new Voiture("Citroen", "blanc"),
    new Voiture("Citroen", "rouge"),
    new Voiture("Renault", "rouge"),
    new Voiture("Renault", "bleue"),
    new Voiture("Peugeot", "vert"),
    new Voiture("Fiat", "blanc"),
    new Voiture("Fiat", "bleue"),
    new Voiture("Lexus", "blanc"),
    new Voiture("Lexus", "vert"),
    new Voiture("Lexus", "vert"),
    new Voiture("Honda", "bleue"),
    new Voiture("Honda", "rouge"),
];

/**
 * Exercices:
 * 1. Etablisser une liste en triant les voitures par couleur !
 * 2. Etablisser la liste des voitures "rouge" du plus grand prix au plus petit !
 * 3. Trouver la voiture qui possède le prix "median". (tableau impaire)
 */