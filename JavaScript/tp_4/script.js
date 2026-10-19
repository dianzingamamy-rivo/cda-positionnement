const sousTitre = document.querySelector(".sous-titre");
//console.dir(sousTitre);

sousTitre.textContent = "Cours de JavaScript";
sousTitre.style.color = "red";

const li = document.createElement("li");
li.textContent = "JavaScript";
liste = document.querySelector(".liste");
liste.append(li);
// li.remove();

/* const bouton = document.querySelector("#btn");
bouton.addEventListener("click", function (event) {
  //console.log(event.target);
  alert("Vous avez cliqué sur le bouton"); // alert ouvre une fenètre popup
}); */

const bouton2 = document.querySelector("#btn");
const panneau = document.querySelector(".panneau");

bouton2.addEventListener("click", function () {
  panneau.classList.toggle("visible");
});

const content = document.querySelector(".content");
const child = document.querySelector(".child");

const boutonVert = document.querySelector("#button-vert");
const childButton = document.querySelector(".child-button");

let positionX = 0;
/* initialize la postion */
boutonVert.addEventListener("click", function (event) {
  positionX += 10;
  /* incrémente de 10cm */

  childButton.style.transform = `translateX(${positionX}px)`;
  /* applique la progression en incrémentant  */
});
