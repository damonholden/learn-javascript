// | General Syntax

// || ES5 syntax:
function timesTwo(params) {
  return params * 2;
}

timesTwo(4);

// || ES6 arrow function syntax:
const timesTwo = params => params * 2;

timesTwo(4);

// benefits of arrow syntax:
// - shorter
// - implicit return (same line)

// | Arrow function syntax variations:

// || No parameters:
const stateTwoAgain = () => 2;
stateTwoAgain(4);

// || Single Parameter:
const hello = name => `hello, my name is ${name}`;

//or:
const hi = name => `hi, my name is ${name}`;

// The parameter parenthesis in single parameter functions are optional

// || multiple parameters

const adder = (x, y) => x + y;

// the parameter parenthesis in functions with multi[le parameters are required

// | Sources:

// || general:
// https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/#:~:text=In%20its%20most%20basic%20form,to%20write%20return%20as%20well.

// || function statements vs function expressions:
// https://coderwall.com/p/f4t65q/javascript-function-expression-vs-function-statement
