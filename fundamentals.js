console.log(`hello from js file`);

const person = {
  firstName: `George`,
  lastName: `Dover`,
  age: 30,
};

const fruit = [`orange`, `apple`, `pear`];

console.log(fruit[2]);

x = 2;
console.log(x, ++x, --x);

y = '2';
console.log(x !== y);
console.log(`x > 2 && y > 1:`, x > 2 && y > 1);
console.log(`x > 2 || y > 1:`, x > 2 || y > 1);

console.log(`${person.firstName} ${person.lastName}`);

console.log(`'true' == true`, `true` == true);

const stringTrue = 'true';
const boolTrue = true;
console.log(stringTrue == boolTrue);

console.log(`1 == true:`, 1 == true);
console.log((20).toString());
console.log(Boolean('')); // null, undefined, 0, and NaN will return false

const color = `yellow`;

switch (color) {
  case `red`:
    console.log(`color is red`);
    break;
  case `blue`:
    console.log(`color is blue`);
    break;
  case `green`:
    console.log(`color is green`);
    break;
  default:
    console.log(`not a valid color`);
}

const i = 2;
do console.log(`i is`, i);
while (i <= 1);

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbersArray) {
  console.log(number);
}
