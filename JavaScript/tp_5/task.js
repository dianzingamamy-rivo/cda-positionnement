/* Récupération des variables */
const tache = document.getElementById("tache"); // id d'une tache
const ajouterTache = document.getElementById("ajouter-tache"); // id du bouton tache
const nombreTaches = document.getElementById("nombre-tache"); // id du nbe de taches
const listeTaches = document.querySelector(".list-taches"); // class ul liste des taches

// initialise le nombre de clics
let nombreClics = 0;

// 0. Vérifie d'abord que le champ de saisie n'est pas vide
tache.addEventListener("input", () => {
  ajouterTache.disabled = tache.value.trim() === "";
});

ajouterTache.addEventListener("click", function () {
  // 1. Crée l'élément de liste <li> à l'intérieur de la boucle des clics
  const liTache = document.createElement("li");
  liTache.textContent = tache.value + "    "; // Ajoute le texte de la tâche
  liTache.style.textAlign = "center";
  liTache.style.listStyleType = "none";

  // 2. Crée le bouton Supprimer en changeant des styles
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "Supprimer";
  boutonSupprimer.style.background = "red";
  boutonSupprimer.style.transform = "translateX(30px)";

  // 3. Additionne le nombre de taches à chaque clic
  nombreClics += 1;
  nombreTaches.textContent = `Nombre de tâches : ${nombreClics}`;

  // 4. Insère le bouton à l'intérieur du <li>
  liTache.appendChild(boutonSupprimer);

  // 5. Ajoute le <li> complet à la liste
  listeTaches.appendChild(liTache);

  // Vider le champ de saisie après l'ajout
  tache.value = "";
});

listeTaches.addEventListener("click", function (event) {
  // On vérifie si on a cliqué sur le bouton supprimer
  // on utilise target pour cibler l'élt actuel du bouton
  if (event.target.textContent === "Supprimer") {
    // 1. On récupère le parent direct du bouton, c'est-à-dire le <li>
    // en regardant l'arboresence venant du DOM
    const li = event.target.parentElement;

    // 2. On supprime le <li> entier (cela supprimera aussi le bouton à l'intérieur)
    li.remove();

    // 3. On décrémente le compteur de tâches
    nombreClics -= 1;
    nombreTaches.textContent = `Nombre de tâches : ${nombreClics}`;
  }
  // Si on clique sur le texte du li (et pas sur le bouton), on barre le texte
  // en changeant son style de décoration
  event.target.style.textDecoration = "line-through";
});
