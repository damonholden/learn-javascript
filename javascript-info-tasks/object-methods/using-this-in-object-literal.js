// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

let name = 'yellow'
function makeUser() {
  return {
    name: 'john',
    ref: this,
  };
}

let user = makeUser();

user.ref.name

// here, 'this' evaluates to the global object
