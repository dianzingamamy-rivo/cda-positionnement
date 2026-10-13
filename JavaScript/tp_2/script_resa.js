const buttonCalculerPrix = document.querySelector("#calculer");

buttonCalculerPrix.addEventListener("click", function () {
  let quantite = Number(document.querySelector("#quantite").value);
  let tarifReduit = document.querySelector("#tarifReduit").value;
  let assurance = document.querySelector("#assurance").value;
  let sousTotal = document.querySelector("#soustotal");
  let reduction = document.querySelector("#reduction");
  let prixAssurance = document.querySelector("#prixAssurance");
  let frais = document.querySelector("#frais");
  let total = document.querySelector("#total");

  // votre code ici
  console.dir(sousTotal);
  /* Calcule d'abord le prix total des billets  */
  let prixTemp = quantite * 25;
  // sousTotal.textContent = `${prixTemp} €`;
  // console.log(quantite);

  // if (tarifReduit === "non") {
  //   if (assurance === "non") {
  //   }
  //}
});

/*
Prix du billet : 25 euros
Reduction : 10%
assurance 2 euros par billet
frais 5 euros si totalTTC < 100
Sous-total ?
Réduction ?
Assurance ?
Frais ?
*/
