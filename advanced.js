// const outer = () => {
//   let counter = 0;
//   const inner = () => {
//     counter++;
//     console.log(counter);
//   };
//   inner();
// };
// outer();

// closure example
const outer = () => {
  let counter = 0;
  const inner = () => {
    counter++;
    console.log(counter);
  };
  return inner;
};
const fn = outer();
fn();
fn();

// TODO research currying

// this keyword
// const person = {
//   name: `Hugo`,
//   sayMyName: function () {
//     console.log(`My name is ${this.name}.`);
//   },
// };
// person.sayMyName();

// prototype example
// function Person(fName, lName) {
//   this.firsName = fName;
//   this.lastName = lName;
// }

// const p1 = new Person(`James`, `Goldwyn`);
// const p2 = new Person(`Alex`, `Link`);

// Person.prototype.getFullName = function () {
//   return `${this.firsName} ${this.lastName}`;
// };

// console.log(p2.getFullName());
