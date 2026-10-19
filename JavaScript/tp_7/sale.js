/* applique jquery sur le toggle */
$("#details").click(function () {
  $(".details").toggle();

  if ($(".details").is(":visible")) {
    $(this).text("Masquer les détails");
  } else {
    $(this).text("Voir les détails");
  }
});

/* multiplie le prix par la quantité donnée dans le input,
ensuite met à jour le prix total 
*/
$("#panier").click(function () {
  let quantite = $("#quantite").val();
  let prix = 89.9;

  if (quantite < 1) {
    $("#message").text("Quantité invalide").css("color", "red");
  } else {
    let total = prix * quantite;

    $("#prix").text(total.toFixed(2) + " €");

    if (quantite == 1) {
      $("#message")
        .text(quantite + " élément a été ajouté dans votre panier")
        .css("color", "green");
    }

    if (quantite > 1) {
      $("#message")
        .text(quantite + " éléments ont été ajoutés dans votre panier")
        .css("color", "green");
    }
  }
});
