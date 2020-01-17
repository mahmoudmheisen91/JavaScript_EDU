"use strict";

let a = Number(null);
document.write("<p>" + a + "</p>");
document.write("<p>" + Boolean(null) + "</p>");

let b = "5" - "2";
let a1 = null;
let a2 = null;
a1 = a2 = b;
let a3 = 2 ** 3;
let n = 2;
n *= 8;
n = 1 >>> 2;
document.write("<p>" + (false == "false") + "</p>");

// let name = prompt("What is your name?", "test");
// alert(name);

// let num = prompt("Enter a number", "");
// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

alert(9 == "9");
