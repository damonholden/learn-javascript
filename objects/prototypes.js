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

{
  const me = {
    name: 'Damon',
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  me.greet(); // Hello, my name is Damon

  me.toString(); // [object Object]

  me.shoes; // undefined
}

// The `toString` method is inherited from the Object prototype. The `shoes`
// property is undefined because it does not exist on the object or its
// prototypes.

// To get the prototype of an object, use the `Object.getPrototypeOf` method.

{
  const me = {
    name: 'Damon',
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  Object.getPrototypeOf(me);
}

// The object returned from `Object.getPrototypeOf(me)` is called
// Object.prototype, it is the most basic prototype in JavaScript. The prototype
// of Object.prototype is null, so it would be the end of the prototype chain.

// The prototype of an object is not always Object.prototype:

{
  const myDate = new Date();
  let object = myDate;

  do {
    object = Object.getPrototypeOf(object);
    console.log(object);
  } while (object !== null);

  // expected console output:
  // Date {}
  // Object {}
  // null
}

// The previous code creates a Date object and then iterates over the prototype
// chain of the object. The prototype chain of a Date object is Date ->
// Object -> null.

// When a property is defined in an object when a property of the same name is
// defined in the object's prototype, the property in the object shadows the
// property in the prototype. This is called property shadowing.

{
  const me = {
    name: 'Damon',
  };

  me.toString(); // [object Object]
}

{
  const me = {
    name: 'Damon',
    toString() {
      return `I am ${this.name}`;
    },
  };

  me.toString(); // I am Damon
}

// The previous code shows how property shadowing works. The `toString` method
// defined in the object shadows the `toString` method defined in
// Object.prototype. This is not the same as overriding the method, like what
// happens when you define a method with the same name as another method in the
// same object. Instead, both methods exist, but prototype chaining will stop
// when it reaches a property with the a matching key.

// you can set an object's prototype in various ways. The simplest way is to
// use the `Object.create` method.

{
  const personPrototype = {
    greet() {
      return `Hello.`;
    },
  };

  const me = Object.create(personPrototype);

  me.greet(); // Hello.
}

// The `Object.create` method takes an object as an argument and returns a new
// object with the argument object as its prototype. The new object will not
// have any properties of its own, but it will inherit properties from the
// prototype object. Remember personPrototype has its own prototype, so it will
// inherit properties from that object as well.

// All functions also have a prototype property, which is an object. This object
// is used as the prototype for objects created by the function when it is used
// as a constructor.

{
  const personPrototype = {
    greet() {
      return `Hello. my name is ${this.name}`;
    },
  };

  function Person(name) {
    this.name = name;
  }

  Object.assign(Person.prototype, personPrototype);

  const me = new Person('Damon');

  me.greet(); // Hello. my name is Damon
}

// Here, an object personPrototype is created with the greet() method. Then a
// function Person is created that takes a name argument and assigns it to the
// name property of the object. The Person function is then assigned the
// personPrototype object as its prototype. The Person function is then used as
// a constructor to create a new object, me. The me object inherits the
// personPrototype object as its prototype, so it has access to the greet()
// method.

// The `Object.assign` method is used to copy the properties of the
// personPrototype object to the Person.prototype object. This is necessary
// because the Person.prototype object is empty by default.

// After assigning the personPrototype object to the Person.prototype object,
// the Person function can be used as a constructor to create new objects. When
// the Person function is used as a constructor, the new object will have the
// personPrototype object as its prototype, which means it will have access to
// the greet() method.

// Any properties defined on the new object are known as own properties. Any
// properties defined on the prototype object are known as inherited properties.
// You can verify whether a property is an own property or an inherited property
// by using the `hasOwnProperty` method.

{
  const personPrototype = {
    greet() {
      return `Hello. my name is ${this.name}`;
    },
  };

  function Person(name) {
    this.name = name;
  }

  Object.assign(Person.prototype, personPrototype);

  const me = new Person('Damon');

  me.greet(); // Hello. my name is Damon

  me.hasOwnProperty('name'); // true
  me.hasOwnProperty('greet'); // false

  // alternatively, you can use the `Object.hasOwn()` method:

  Object.hasOwnProperty(me, 'name'); // true
  Object.hasOwnProperty(me, 'greet'); // false
}

// prototypes are useful for defining methods that are shared by multiple
// objects, making it possible to reduce the amount of memory used by the
// application and code duplication.

// Prototypes support a concept in object-oriented programming called
// inheritance. Its the ide that some objects are more specialized versions of
// other objects.

// For example there were multiple kinds of dinosaurs, but they all share some
// common characteristics. The T-Rex and the Velociraptor are both dinosaurs, so
// they have some common characteristics, like walking, eating, and breathing,
// but each might add extra characteristics, like the T-Rex having a larger
// height and the Velociraptor having a faster speed. In as OOP system, the
// T-Rex and the Velociraptor object could inherit from a Dinosaur object.
