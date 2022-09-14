// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function () {
    this.a = +prompt('give a number', '');
    this.b = +prompt('give another number', '');
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert(`Sum = ${calculator.sum()}`);

alert(`Mul = ${calculator.mul()}`);
