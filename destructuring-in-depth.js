// It appears that the destructuring assignment is more complex than it first
// appears.

// The following is sourced from the MDN documentation on destructuring
// assignment:
// 	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// The destructuring assignment is a special form of assignment that allows
// unpacking of values from arrays and properties from objects into distinct
// variables.

{
  const foo = ['one', 'two', 'three'];
  const bar = { colorOne: 'red', colorTwo: 'green', colorThree: 'blue' };

  const [a, b, c] = foo;
  const { colorOne, colorTwo, colorThree } = bar;

  console.log(a); // 'one'
  console.log(b); // 'two'
  console.log(c); // 'three'
  console.log(colorOne); // 'red'
  console.log(colorTwo); // 'green'
  console.log(colorThree); // 'blue'
}
