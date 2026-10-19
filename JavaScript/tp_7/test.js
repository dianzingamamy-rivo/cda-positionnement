console.log("Début");
setTimeout(() => {
  console.log("Message différé");
}, 2000);
console.log("Fin");
console.log("");

console.log("A");
console.log("B");
console.log("C");
console.log("");

const promesse = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Données reçues");
  }, 2000);
});
promesse.then((resultat) => {
  console.log(resultat);
});

console.log("");
function attendre() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Données reçues");
    }, 2000);
  });
}

async function lancer() {
  try {
    const resultat = await attendre();
    console.log(resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  } finally {
    console.log("Fin du traitement");
  }
}
lancer();

console.log("");
/* Fetch et json : récupérer des données */
/* const reponse = await fetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=2",
);
const donnees = await reponse.json();
donnees.forEach((element) => {
  const carte = `<article class="carte"><h2>${element.title}</h2><p>${element.body}</p></article>`;
  console.log(carte);
}); */

async function recupererDonnees() {
  const reponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=2",
  );

  const donnees = await reponse.json();

  donnees.forEach((element) => {
    const carte = `<article class="carte"><h2>${element.title}</h2><p>${element.body}</p></article>`;

    console.log(carte);
  });
}

recupererDonnees();
console.log("");
/* Ajax JQuery <--> Fetch moderne */
