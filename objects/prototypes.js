// prototypes are the mechanism that allows JavaScript objects to inherit
// functionality from other objects.

{
  const me = {
    name: 'Damon',
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  me.greet(); // Hello, my name is Damon
}

// The previous object looks like it has a single data property and a single
// method. However, every object i JavaScript has a built-in prototype property
// that is a reference to another object. Since a prototype is an object, it
// will have its own prototype property, which creates a prototype chain. This
// chain ends when an object's prototype property is null.
