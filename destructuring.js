//Not using destructuring with an object.
const person = { name: 'john', age: 23, job: 'developer' };
`Hi, my name is ${person.name}. I'm ${person.age}. I am a ${person.job}`;

//Destructuring alternative.
const { name, age, job } = person;
`Hi, my name is ${name}. I'm ${age}. I am a ${job}`;

//Not using destructuring with an array.
const cars = ['Ford', 'Honda', 'Audi'];
const carA = cars[0];
const carB = cars[1];
const carC = cars[2];

//Destructuring alternative
const [carD, carE, carF] = cars;
carD;
carE;
carF;
