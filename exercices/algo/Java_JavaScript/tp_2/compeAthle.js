// 1- Modélisation des données
class Athlete {
  constructor(nom, prenom, age, pays, equipe) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.pays = pays;
    this.equipe = equipe;
  }

  nompComplet() {
    return `${prenom} ${nom}`;
  }

  toString() {
    return `${this.prenom} ${this.nom} (${this.pays}, ${this.equipe})`;
  }
}

// const bolt = new Athlete("Bolt", "Usain", 30, "Jamaique", "Lightning");
// console.log(bolt.toString());

class Epreuve {
  constructor(nom, type, unite, sensTri, resultats) {
    this.nom = nom;
    this.type = type; // individuel/equipe
    this.unite = unite; // secondes/metres/points
    this.sensTri = sensTri;
    this.resultats = new Map(resultats); // <athlete,nombre>
  }
  enregisterResultat(athlete, score) {
    this.resultats.set(athlete, score);
  }

  classement() {
    if (this.unite === "secondes") {
      const classementAthlete = new Map(
        [...this.resultats].sort((a, b) => a[1] - b[1]),
      ); // A partir de la Map, il fait le classement par ordre croissant
      return classementAthlete;
    } else {
      const classementAthlete = new Map(
        [...this.resultats].sort((a, b) => b[1] - a[1]),
      ); // A partir de la Map, il fait le classement par ordre décroissant
      return classementAthlete;
    }
  }
}

class Competititon {
  constructor(nom, annee, athletes, epreuves) {
    this.nom = nom;
    this.annee = annee;
    this.athletes = [];
    this.epreuves = [];
  }

  ajouterAthlete(athlete) {
    this.athletes.push(athlete);
  }

  ajouterEpreuve(epreuve) {
    this.epreuves.push(epreuve);
  }

  afficherResultatsEpreuve(nomEpreuve) {}
}

// 2- Gérer les scores
// 2.1- Créer 8 athletes de 4 pays / 2 equipes
const bolt = new Athlete("Bolt", "Usain", 30, "Jamaique", "Lightning");
const blake = new Athlete("Blake", "Yohan", 28, "Jamaique", "Lightning");

const gatlin = new Athlete("Gatlin", "Justin", 27, "Etats-Unis", "Thorns");
const green = new Athlete("Green", "Maurice", 31, "Etats-Unis", "Thorns");

const tebogo = new Athlete("Tebogo", "Letsile", 21, "Botswana", "FireBall");
const collen = new Athlete("Collen", "Busang", 25, "Botswana", "FireBall");

const ajayi = new Athlete("Ajayi", "Kayin", 30, "Nigeria", "Stars");
const ashe = new Athlete("Ashe", "Favour", 23, "Nigeria", "Stars");

// 2.2- Creer 3 epreuves : "100m" (ASC), "Saut en longueur" (DESC), "Lancer du poids" (DESC)
// Epreuve du 100 m
const epreuve100m = new Epreuve(
  "100m",
  "individuel",
  "secondes",
  "ASC",
  (resultats = new Map()),
);
epreuve100m.resultats.set("Usain Bolt", 9.58);
epreuve100m.resultats.set("Yohan Blake", 9.77);
epreuve100m.resultats.set("Justin Gatlin", 9.75);
epreuve100m.resultats.set("Maurice Green", 10.58);
epreuve100m.resultats.set("Letsile Tebogo", 10.21);
epreuve100m.resultats.set("Busang Collen", 10.03);
epreuve100m.resultats.set("Kayin Ajayi", 9.98);
epreuve100m.resultats.set("Favour Ashe", 9.63);

console.log("=== Résultats Epreuve 100m ===");
console.log(epreuve100m.classement());

// Epreuve du saut en longueur
const epreuveSautEnLongueur = new Epreuve(
  "Saut en longueur",
  "individuel",
  "metres",
  "DESC",
  (resultats = new Map()),
);
epreuveSautEnLongueur.resultats.set("Usain Bolt", 9.08);
epreuveSautEnLongueur.resultats.set("Yohan Blake", 7.34);
epreuveSautEnLongueur.resultats.set("Justin Gatlin", 8.97);
epreuveSautEnLongueur.resultats.set("Maurice Green", 9.65);
epreuveSautEnLongueur.resultats.set("Letsile Tebogo", 11.34);
epreuveSautEnLongueur.resultats.set("Busang Collen", 7.87);
epreuveSautEnLongueur.resultats.set("Kayin Ajayi", 9.98);
epreuveSautEnLongueur.resultats.set("Favour Ashe", 8.96);

console.log("=== Résultats Epreuve Saut en longueur ===");
console.log(epreuveSautEnLongueur.classement());

// Epreuve du lancer de poids
const epreuveLancerDuPoids = new Epreuve(
  "Lancer du poids",
  "individuel",
  "metres",
  "DESC",
  (resultats = new Map()),
);
epreuveLancerDuPoids.resultats.set("Usain Bolt", 22.14);
epreuveLancerDuPoids.resultats.set("Yohan Blake", 19.89);
epreuveLancerDuPoids.resultats.set("Justin Gatlin", 24.04);
epreuveLancerDuPoids.resultats.set("Maurice Green", 21.87);
epreuveLancerDuPoids.resultats.set("Letsile Tebogo", 22.17);
epreuveLancerDuPoids.resultats.set("Busang Collen", 23.56);
epreuveLancerDuPoids.resultats.set("Kayin Ajayi", 21.54);
epreuveLancerDuPoids.resultats.set("Favour Ashe", 23.04);

console.log("=== Résultats Epreuve Lancer du poids ===");
console.log(epreuveLancerDuPoids.classement());

// 3. Enregistrer des resultats pour chaque athlete dans chaque epreuve
// Epreuve du 100 m
console.log("demo for of ");

for (const value of epreuveLancerDuPoids.resultats) {
  console.log(value);
}
