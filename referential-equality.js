const stringA = `something`;
const stringB = `something`;

const integerA = 10;
const integerB = 10;

const objectA = { name: `pam`, age: 70, location: `UK` };
const objectB = { name: `pam`, age: 70, location: `UK` };

const functionA = (value) => value;
const functionB = (value) => value;

integerA === integerB;
stringA === stringB;
objectA === objectB;
functionA === functionB;
const copy = functionA(objectA)
objectA === copy
