// https://javascript.plainenglish.io/its-2022-please-don-t-just-use-console-log-anymore-217638337c7d

// simple way of setting up console log:
const pet = '🐶';
console.log('Hello World', pet);
// doesn't scale well

// could use an object
const object = {
pet: '🐶',
message: 'Hello World'
}
console.log(object);
// slightly more scalable

// interestingly you can css style a console log:
console.log('%c Hello World', 'color: red; font-size: 50px');
console.log('%c 🐶', 'font-size: 500px');

// console.warn is another way to make logs more obvious
// will make logs yellow

for (let i = 0; i < 50; i++) {
  console.log(`i: ${i}`)

  if (i === 16) {
    console.warn(`i--: ${i}`)
  }
}

// console.error should be used to log errors in promises for example:
const err = 'http request rejected with 404';
console.error(err)

// not only will console.error make the log red, it will also show the stack
// trace

const a = () => {
  console.error("error");
}
const b = () => {
  a()
}
const c = () => {
  b()
}

c()

// console.time and console.timeEnd can be used to time how long a function
// takes to execute:

{
  let count = 0;

  console.time();
  for (let i = 0; i < 10000; i++) {
    count++;
  }

  console.timeEnd();
}

// you can even time multiple bits of code:
{
  let count = 0;

  console.time('time1');

  for (let i = 0; i < 1000000000; i++) {
    count++;
  }

  console.timeEnd('time1');

  console.time('time2');

  for (let i = 0; i < 1000000000; i++) {
    count++;
  }

  console.timeEnd('time2');
}

// console.table can be used to log an array of objects as a table and could be
// seen as more intuitive than other options:

{
  const foods = [
    {
      name: '🍔',
      price: 30.89,
      group: 1,
    },
    {
      name: '🍨',
      price: 20.71,
      group: 1,
    },
    {
      name: '🍿',
      price: 10.31,
      group: 2,
    },
    {
      name: '🍵',
      price: 5.98,
      group: 2,
    },
  ];

  console.table(foods);
}
