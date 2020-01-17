"use strict";

//  Lables:
outer: for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    if (i == 2) break outer;
    console.log(i, j);
  }
}

//  Evens:
for (let i = 2; i <= 10; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}

// Prime Number:
let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...
  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // a prime
}

// Switch:
let a = 3;
switch (a) {
  case 1:
  case 2:
    console.log(4);
    break;
  case 3:
    console.log(a);
    break;
  default:
    console.log(2);
}
