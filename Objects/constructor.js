function User(name, id) {
  this.name = name;
  this.id = id;
}

let a = new User("a", 4);
console.log(a.id);

function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

function Accumulator(stratingValue) {
  this.value = stratingValue;
  this.read = function() {
    this.value += +prompt("value?", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
