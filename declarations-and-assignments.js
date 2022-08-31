// Multiple ways to declare and assign variables

// declaration = create named storage in memory
// assignment = store some data in a declared variable

// separate declaration and assignment:
let something // declaration
something = 'coffee' //assignment

// declaration and assignment in same line
let anotherThing = 'tea'

// multiple declarations in same line (shorter, but confusing)
let item = 'string', that = 'chair', number = 3

// multiple declarations in separate lines
// (larger footprint, but more readable)
let stuff = ['bits', 'bobs']
let stick = 'wood'
let wheels = 4

// single statement declaration, multiple lines
let user = 'jane',
  age = 25,
  message = 'Hello';

// comma-first style of previous example
let person = 'John'
  , amountOfPencils = 20
  , catchphrase = 'wow';

// all the previous variants, technically are the same thing.
// The method to use will depend on personal taste, project convention, readability, etc.
