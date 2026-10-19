const brazzaville = document.getElementById("brazzaville");
const pointeNoire = document.getElementById("pointeNoire");
const ouesso = document.getElementById("ouesso");

/* positions des points ciblés */
const positions = {
  brazzaville: {
    left: 218,
    top: 429,
  },

  pointeNoire: {
    left: 47,
    top: 455,
  },
  ouesso: {
    left: 250,
    top: 140,
  },
};

/* Fonctions qui affichent les villes  */
function afficherVille(ville) {
  const position = positions[ville];

  $("#point-" + ville).css({
    left: position.left + "px",
    top: position.top + "px",
  });

  $("#" + ville).mouseover(function () {
    $("#point-" + ville).show();
    $("#info-" + ville).show();
    $(this).css("color", "red");
  });

  $("#" + ville).mouseout(function () {
    $("#point-" + ville).hide();
    $("#info-" + ville).hide();
    $(this).css("color", "");
  });
}

afficherVille("brazzaville");
afficherVille("pointeNoire");
afficherVille("ouesso");
