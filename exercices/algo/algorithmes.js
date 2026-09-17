/*
// Test
console.log(" ");
console.log("Bonjour Rivo");
console.log(" ");

// Construction de la fonction FizzBuzz
// Fonction
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(`${i}`);
    }
  }
}

// Test de la fonction
n = 15;
fizzBuzz(n);

// Fonction Palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ""); // enlève d'abord les espaces
  const len = cleanedStr.length; // compte le nombre de caractères sans espaces
  for (i = 0; i < len / 2; i++) {
    // vérifie la symétrie entre les caractères en avant et ceux
    // en arrière
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test variable
test1 = "kayak";
test2 = "hello";
test3 = "A man a plan a canal Panama";
test4 = "Elu par cette crapule";
test5 = "Ressasser";
isPalindrome(test1);
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false


// Fonction Anagrammes
function areAnagrams(str1, str2) {
  const cleanedStr1 = str1.toLowerCase().replace(/[\W_]/g, ""); // enlève d'abord les espaces
  const cleanedStr2 = str2.toLowerCase().replace(/[\W_]/g, "");

  if (cleanedStr1.length !== cleanedStr2.length) {
    return false; // Vérifie déjà si les deux longueurs sont les mèmes
  }

  const sortedStr1 = cleanedStr1.split("").sort().join(""); // trie et compare
  const sortedStr2 = cleanedStr2.split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

// Tests
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("Hello", "World")); // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true


// Fonction Fibonacci
// Version récursive
function finobacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n >= 2) {
    return finobacci(n - 1) + finobacci(n - 2);
    // une fonction qui s'appelle dans sa propre fonction
  }
}

// Version iterative
function fibonacciIterative(n) {
  a = 0;
  b = 1;
  temp = 0; // on initialise
  for (i = 2; i <= n; i++) {
    temp = a + b;
    a = b; // on garde dans une variable temporaire
    b = temp;
  }
  return temp;
}

n = 10;
console.log(finobacci(n));
console.log(fibonacciIterative(n));
*/
