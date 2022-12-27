'use strict';

// an IIFE (Immediately Invoked Function Expression) is a function that is
// immediately invoked. In other words, it is a function that is called as soon
// as it is defined.

// This design pattern is also known as a Self-Executing Anonymous Function and
// contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the
//    Grouping Operator (). This prevents accessing variables within the IIFE
//    idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression ()()
//    through which the JavaScript engine will directly interpret the function.

{
  (function () {
    console.log('Hello, world!');
  })();

  (() => {
    console.log('Hello, world!');
  })();

  (async () => {
    console.log('Hello, world!');
  })();
}

// An IIFE is particularly useful when trying to avoid variable hoisting from
// within blocks, preventing pollution of  the global scope and simultaneously
// allowing public access to methods while retaining privacy for variables
// defined within the function.

{
  (() => {
    // private variable
    let privateVariable = 'Hello, world!';
  })();

  // console.log(privateVariable); // ReferenceError: privateVariable is not
  // defined
}

// As we will not reuse the code again, using IIFE in this case is better than
// using a function declaration or a function expression.

// IIFE's can also be used to simulate top-level await in older versions of
// JavaScript by using the async keyword.

{
  (async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1');
  })();
}

// IIFE's can also be used to create a module pattern. This is a design pattern
// that provides both private and public encapsulation for methods and
// variables.

{
  function makeWithdraw(balance) {
    ((copyBalance) => {
      let balance = copyBalance; // This variable is private
      const doBadThings = () => {
        console.log('I will do bad things with your money');
      };
      doBadThings();
      return {
        withdraw(amount) {
          if (balance >= amount) {
            balance -= amount;
            return balance;
          }
          return 'Insufficient money';
        },
      };
    })(balance);

    const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
    console.log(firstAccount.balance); // undefined
    console.log(firstAccount.withdraw(20)); // 80
    console.log(firstAccount.withdraw(30)); // 50
    console.log(firstAccount.doBadThings); // undefined; this method is private
    const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
    console.log(secondAccount.withdraw(30)); // "Insufficient money"
    console.log(secondAccount.withdraw(20)); // 0
  }
}

// Some old code (before the introduction of let and const) used IIFE's to
// create a function scope in for loops. FOr example, the following code doesn't
// work as expected:

{
  var object = {
    a: 1,
    b: 2,
    c: 3,
  };

  for (var i = 0; i < Object.keys(object).length; i++) {
    object[Object.keys(object)[i]] = () => i;
  }

  object.a();
  object.b();
  object.c();
}

// The reason for this is that the variable `i` is hoisted to the global scope
// and is therefore shared between all the iterations of the for loop. This is
// because the for loop is not a block scope. The following code works as
// expected:

{
  var object = {
    a: 1,
    b: 2,
    c: 3,
  };

  for (var i = 0; i < Object.keys(object).length; i++) {
    ((i) => {
      object[Object.keys(object)[i]] = () => i;
    })(i);
  }

  object.a();
  object.b();
  object.c();
}

// This is because the variable `i` is now scoped to the IIFE and is therefore
// not shared between the iterations of the for loop. Today, this is not
// necessary because of the introduction of let and const. The following code
// is a better implementation:

{
  const object = {
    a: 1,
    b: 2,
    c: 3,
  };

  for (let i = 0; i < Object.keys(object).length; i++) {
    object[Object.keys(object)[i]] = () => i;
  }

  object.a();
  object.b();
  object.c();
}

// IIFE's can also be used to create a singleton. A singleton is an object that
// is instantiated only once. This is useful when you want to create a single
// instance of an object that is shared across the application.

{
  const singleton = (() => {
    let instance;
    const createInstance = () => {
      const object = new Object('I am the instance');
      return object;
    };
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
}
