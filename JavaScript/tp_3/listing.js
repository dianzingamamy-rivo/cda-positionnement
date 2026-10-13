const stagiaires = [
  {
    prenom: "Léa",
    note: 14,
  },
  {
    prenom: "Karim",
    note: 8,
  },
  {
    prenom: "Sophie",
    note: 17,
  },
  {
    prenom: "Thomas",
    note: 11,
  },
  {
    prenom: "Nora",
    note: 6,
  },
];

/*
1- Afficher le nombre de stagiaires
2- Afficher tous les stagiaires
3- Trouver les admis
4- Calculer la moyenne
5- Rechercher par prénom
*/

/*
Comme il faut rajouter un tableau, on crée alors un nouvel élément tableau
*/
const table = document.createElement("table");

const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>Prénom</th><th>Note</th>";
table.appendChild(headerRow);

// Remplacement de votre boucle
stagiaires.forEach((stagiaire) => {
  // 1. On crée la ligne pour le stagiaire
  const tr = document.createElement("tr");

  // 2. On crée la cellule pour le prénom
  const tdPrenom = document.createElement("td");
  tdPrenom.textContent = stagiaire.prenom; // Accès direct à l'objet
  tr.appendChild(tdPrenom);

  // 3. On crée la cellule pour la note
  const tdNote = document.createElement("td");
  tdNote.textContent = stagiaire.note; // Accès direct à l'objet
  tr.appendChild(tdNote);

  // 4. On ajoute la ligne complète au tableau
  table.appendChild(tr);
});

// On insère le tableau dans le HTML
document.getElementById("liste").appendChild(table);
