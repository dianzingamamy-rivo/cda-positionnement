// alert("Hello, le fichier est chargé !");

const note1 = 14;

if (note1 >= 16) {
  console.log("Très bien");
} else if (note1 >= 14) {
  console.log("Bien");
} else if (note1 >= 10) {
  console.log("Admis");
} else {
  console.log("Insuffisant");
}
console.log(" ");

const note2 = 10;
switch (true) {
  case note2 >= 16:
    console.log("Très bien");
    break;
  case note2 >= 14:
    console.log("Bien");
    break;
  case note2 >= 10:
    console.log("Admis");
    break;
  default:
    console.log("Insuffisant");
}
console.log(" ");

for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log(" ");

let compteur = 1;
while (compteur <= 5) {
  console.log(compteur);
  compteur++;
}
console.log(" ");

prixProduit = 49.9; /* HT */
quantite = 3;
tauxTVA = 0.2;
tauxRemise = 0.1;

/* Calculer le total HT */
prixTotal = prixProduit * 3;
prixHT = prixTotal + prixTotal * tauxTVA;
console.log(prixHT);

/* Appliquer 10% de remise */
if (prixHT >= 200) {
  prixHT = prixHT - prixHT * 0.1;
} else {
  prixHT = prixHT;
}
console.log(prixHT);

/* Ajouter 8 eros de livraison si le total après remise est inférieur = 100 euros */
