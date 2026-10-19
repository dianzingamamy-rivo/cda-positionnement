$("#charger").on("click", function () {
  // On désactive le bouton pour ne pas que çà charge à chaque fois
  $(this).prop("disabled", true);

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts?_limit=6", // 6 articles sont extraits
    method: "GET",
    dataType: "json",
  })
    .done(function (donnees) {
      // chaque article est un élément placé dans une carte
      donnees.forEach(function (element, index) {
        const carte = $(`
          <article class="carte">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
          </article>
        `);

        // On cache la carte au départ
        carte.hide();

        // On ajoute chaque dans la div de class catalogue
        $(".catalogue").append(carte);

        // On fait apparaître chaque carte progressivement, l'une après l'autre
        carte.delay(index * 300).fadeIn(500);
      });
    })
    .fail(function () {
      console.log("Erreur lors du chargement");
    });
});
