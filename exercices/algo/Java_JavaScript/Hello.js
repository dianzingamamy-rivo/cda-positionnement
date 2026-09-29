/* Afficher */
/* console.log("Bonjour, monde!"); */
// Avec le module readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Vote prenom ? ", (prenom) => {
  console.log(`Bonjour ${prenom}`);
  rl.close();
});

// Version simplifiée avec
