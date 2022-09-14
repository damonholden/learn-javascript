// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to
// the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with
// the initial value startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function (number) {
    return this.value += number;
  };
}

const balls = new Accumulator(4)

balls.read(7)
balls.read(8)
balls.read(1)
balls.read(2)
balls.read(1)
balls.read(12);
balls.value
