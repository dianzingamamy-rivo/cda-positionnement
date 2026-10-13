/*
function direBonjour(prenom) {
  console.log(`Bonjour ${prenom} !`);
}
*/

// direBonjour("Léa");
function addition(a, b) {
  return a + b;
}

const resultat = addition(5, 3);
console.log(resultat);

/*
function openPopUp(arg1, arg2) {
  window.open(arg1, arg2);
}
console.log(openPopUp("https://www.google.fr", "width=500, height=500"));
*/
function saluer(prenom = "visiteur") {
  return `Bonjour ${prenom}`;
}
console.log(saluer("Rivo"));

const Somme = (a, b) => a + b;
console.log(Somme(5, 3));

/* hoisting */
direBonjour();
function direBonjour() {
  console.log("Bonjour");
}

/* scope de bloc */
if (true) {
  let message = "Bonjour";
}
// console.log(message);

const fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[1]);

const notes = [8, 12, 15, 6, 18];
notes.forEach((n) => console.log(n));
const doubles = notes.map((n) => n * 2);
const admis = notes.filter((n) => n >= 10);
const premiere = notes.find((n) => 14);
const total = notes.reduce((acc, n) => acc + n, 0);

/* Objet */
const produit = {
  nom: "Clavier",
  prix: 494.0,
  stock: 12,
};
console.log(produit.nom);

/* Tableau d'objets */
const produits = [
  { id: 1, nom: "Clavier", prix: 45 },
  { id: 2, nom: "Souris", prix: 25 },
  { id: 3, nom: "Ecran", prix: 220 },
];

/* Destructuring */
const Xproduit = { nom: "Clavier", prix: 45 };
const { nom, prix } = Xproduit;

/* Spread */
const a = [1, 2, 3];
const b = [...a, 4, 5];
const promo = { ...produit, prix: 39.9 };
