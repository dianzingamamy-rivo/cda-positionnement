/* let a = 5;
let b = "3";
let c = a + Number(b);
let d = a + b;
console.log(c, d);

function f(n) {
  if (n % 3 === 0 && n % 5 === 0) return "A";
  else if (n % 3 === 0) return "B";
  else if (n % 5 === 0) return "C";
  else return "D";
}

console.log(f(15));

let i = 1;
while (i <= 20) {
  if (i % 4 === 0) {
    console.log("ok");
  }
  i++;
}

let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2);
arr.push(60);
console.log(arr); */

/* function mystery(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}

console.log(mystery([3, 7, 2, 9, 4]));
 */

/* let s = new Set([1, 2, 3, 2, 1, 4]);
s.add(3);
s.delete(1);
console.log(s.size, s.has(1)); */

/* function g(n) {
  if (n <= 1) return 1;
  return n * g(n - 1);
}

console.log(g(4)); */
Mot = "le chat et le chien et le chat";
const motDecoupe = Mot.split(" ");
const nouvMotDecoupe = new Set(motDecoupe);

longueurMot = motDecoupe.length;
longueurNouvMot = nouvMotDecoupe.size;

console.log(nouvMotDecoupe.key[0]);

/* 1er mot */
count = 0;
for (i = 0; i < longueurMot; i++) {
  if ("le" === motDecoupe[i]) {
    count = count + 1;
  }
}
// console.log(`le ${count}`);

/* 2è mot */
count = 0;
for (i = 0; i < longueurMot; i++) {
  if ("chat" === motDecoupe[i]) {
    count = count + 1;
  }
}
// console.log(`chat ${count}`);

/* 3è mot */
count = 0;
for (i = 0; i < longueurMot; i++) {
  if ("chien" === motDecoupe[i]) {
    count = count + 1;
  }
}
// console.log(`chien ${count}`);

/* 4è mot */
count = 0;
for (i = 0; i < longueurMot; i++) {
  if ("et" === motDecoupe[i]) {
    count = count + 1;
  }
}
// console.log(`et ${count}`);
