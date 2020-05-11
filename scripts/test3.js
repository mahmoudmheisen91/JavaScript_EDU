"use strict";

let a = "px" + 9;
let b = 9 + "test";

console.log(a);
console.log(b);

const isPrime = (x) =>
  x > 1 &&
  ![...Array(Math.floor(Math.sqrt(x)) - 1)].some((z, y) => x % (y + 2) === 0);

console.log([...Array(9)]);
console.log(isPrime(27));
console.log(isPrime(7));