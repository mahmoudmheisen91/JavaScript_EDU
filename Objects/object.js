"use strict";

let a = new Object();
let b = {};

b = {
  name: "Mahmoud",
  ID: 7,
  "is bird": false
};

b.isAdmin = true;
b["like bird"] = true;

delete b["is bird"];
delete b.ID;

console.log(b.name);
console.log(b["is bird"]);

let fruit = "apple";
b[fruit] = 5;

console.log(b.apple);

for (let k in b) {
  console.log(b[k]);
}

let user = {
  name: "Mahmoud2"
};

let a1 = {
  id: 3
};

let a2 = {
  id2: 4
};

Object.assign(user, a1, a2);
console.log(user);

let clone = Object.assign({}, user);
console.log(clone);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(user);
console.log(user);
console.log(clone);
