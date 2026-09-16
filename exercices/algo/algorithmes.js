// Test 
console.log(" ");
console.log("Bonjour Rivo");
console.log(" ");

// Construction d'une fonction
// Fonction
function fizzBuzz(n){
	for (let i=1; i<=n; i++){
		if ((i%3)==0 && (i%5)==0){
			console.log("FizzBuzz");
		}
		else if ((i%3)==0){
			console.log("Fizz");
		}
		else if ((i%5)==0){
			console.log("Buzz");
		}
		else {
			console.log(`${i}`);
		}
	}
}

// Test de la fonction
n=15;
fizzBuzz(n);
