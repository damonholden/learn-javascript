// [`hello`, `you`, `are`, `minging`].forEach((message, index) => {
//   setTimeout(() => console.log(message), 2000 * (index + 1)); //runs in browser, not javascript
// });

// // Higher Order function and callback function example
// const greet = (name) => console.log(`hello ${name}`);
// const higherOrderFunction = (callback) => {
//   const name = `Greg`;
//   callback(name);
// };
// higherOrderFunction(greet);

// promise examples

// promise race
const getSomethingQuick = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, `one`);
});

const getSomethingSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, `two`);
});

Promise.race([getSomethingQuick, getSomethingSlow]).then((value) => {
  console.log(value);
});

// hello world async

helloWorld = async () => {
  return Promise.resolve(`Hello World`);
};

helloWorld().then((value) => console.log(value));
