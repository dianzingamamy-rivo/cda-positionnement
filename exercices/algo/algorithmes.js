// Test 
console.log(" ");
console.log("Bonjour Rivo");
console.log(" ");

// Construction d'une fonction
// Fonction
function fizzBuzz(n){

	if ((n%3)==0){
		console.log("Fizz");
	}
	else if ((n%5)==0){
		console.log("Buzz");
	}
	else if ((n%3)==0 && (n%5)==0){
		console.log("FizzBuzz");
	}
	else {
		console.log(n);
	}

}

// Test de la fonction
n=15;
fizzBuzz(n);
