const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => this.count;

  this.peek = () => this.storage[this.count - 1];
};

const fruitStack = new Stack();

fruitStack.push(`apple`);
console.log(fruitStack.size());
console.log(fruitStack.peek());
fruitStack.push(`pear`);
console.log(fruitStack.size());
console.log(fruitStack.peek());
fruitStack.push(`orange`);
console.log(fruitStack.size());
console.log(fruitStack.peek());
console.log(`popped ${fruitStack.pop()}`);
console.log(fruitStack.size());
console.log(fruitStack.peek());

// constructors cannot be declared with an arrow function
