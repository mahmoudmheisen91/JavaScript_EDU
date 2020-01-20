let id = Symbol("desc");
console.log(id.toString());
console.log(id.description);

let a = "test";
let b = Symbol("2");

let user = {
  name: "mahmoud",
  "is dev": true,
  [a]: true,
  [b]: 2,
  0: false
};

user[id] = 1;
console.log(user);
console.log(user["0"]);

let id1 = Symbol("1");
let id2 = Symbol("1");

let id3 = Symbol.for("1");
let id4 = Symbol.for("1");
console.log(id4 == id3);
console.log(Symbol.keyFor(id4));

let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

// obj.go(); // (1) [object Object]

// obj.go(); // (2) [object Object]

// (method = obj.go)(); // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1

let a4 = {
  a() {
    this.name = "cat";
  },
  b() {
    this.age = 5;
  }
};

a4.a(); // a now has a name property
a4.b(); // a now has an age property

console.log(calculator); //{a: ƒ, b: ƒ, name: "cat", age: 5}

let user33 = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user33); // hint: string -> {name: "John"}
alert(+user33); // hint: number -> 1000
alert(user33 + 500); // hint: default -> 1500
