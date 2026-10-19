/* Utilisation dataset */
$(".toutesPhotos img").click(function () {
  let photo = $(this).data("photo");

  $("#grandePhoto").attr("src", photo);

  $("#fond").show();
  $("#grandePhoto").show();
});

$("#fond").click(function () {
  $("#fond").hide();
  $("#grandePhoto").hide();
});

/* Animation basée sur les déplacements horizontaux gauche vers droite, et inversement */
$(".toutesPhotos img").mouseover(function () {
  $(this).animate(
    {
      marginLeft: "5px",
    },
    100,
  );

  $(this).animate(
    {
      marginLeft: "-5px",
    },
    100,
  );

  $(this).animate(
    {
      marginLeft: "5px",
    },
    100,
  );

  $(this).animate(
    {
      marginLeft: "0px",
    },
    100,
  );
});
