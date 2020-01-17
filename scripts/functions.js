"use strict";

function sayHi() {
  let a = 4;
  alert("hi");
}
// alert(sayHi);
// sayHi();

function add(a, b) {
  b = b || 3; // like defualt value
  alert(a + b);
}

// add(2);

function min(a, b) {
  return a < b ? a : b;
}

// alert(min(3, 0));
// alert(pow(4, 5));
function pow(x, n) {
  return x ** n;
}

// let x = +prompt("x: ", "1");
// let n = +prompt("n: ", "1");
// alert(pow(x, n));

let pow2 = function(x, n) {
  return x ** n;
};

// alert(pow2(4, 5));

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// ask(
//   "Do you agree?",
//   function() {
//     alert("You agreed.");
//   },
//   () => alert("You canceled the execution.")
// );

let ask2 = (question, yes, no) => (confirm(question) ? yes() : no());
ask2(
  "Do you agree?",
  () => console.log("You agreed"),
  () => console.log("You interrupted execution")
);

// let age = prompt("What is your age?", 18);

// let welcome =
//   age < 18
//     ? function() {
//         alert("Hello!");
//       }
//     : function() {
//         alert("Greetings!");
//       };

// welcome(); // ok now

let sum1 = (a, b) => a + b;
let sum2 = () => 1 + 2;
let sum3 = a => a + 10;

console.log(sum3(100));
console.log(sum1(20, 20));
