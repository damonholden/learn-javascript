// javascript classes have a built in syntax for private class properties.


//private properties can be created using the hash `#` prefix.

class Government {
	#secret = 'the moon landing never happened'

	#scandalousActivity() {
		// pinch from the state pension
	}

}


// any attempt to access private properties from outside the class will be a
// syntax error

const instance = new Government()

instance.#secret //syntax error
instance.#scandalousActivity() //syntax error


//similarly, any attempt to access a private property that has not been declared
//will be a syntax error

class Box {
  constructor() {
    this.#boxColor = 'green'; //syntax error
  }
}


// deleting a private field is also a syntax error:

class Pizza {
	#cheese;
	constructor() {
		delete this.#cheese //syntax error
	}
}


// typically, accessing a property that doesn't exist on an object would
// return undefined. But with private properties, a Typeerror is thrown:

class Tree {
}

const tallThang = new Tree()

tallThang.#name //TypeError
