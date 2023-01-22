// Object proxies allow you to create an object that intercepts and redefine
// operations for another object.

// The following code snippet is an example of a proxy, where the handler (which
// contains the interceptors/traps) redefines the behavior of the internal get()
// method and returns a string if the property does not exist instead of undefined.

{
  const handler = {
    get(targetObject, key) {
      return key in targetObject
        ? targetObject[key]
        : 'looks like this property does not exist';
    },
  };

  const proxy = new Proxy({ a: 1, b: 2, c: 3, d: undefined }, handler);

  proxy.a;
  proxy.b;
  proxy.c;
  proxy.d;
  proxy.e;
}

// operations performed on the proxy are forwarded to the target object. The
// following code snippet demonstrates this. Note that this only works for
// plain objects.

{
  const targetObject = {};
  const proxy = new Proxy(targetObject, {});

  targetObject.a; // undefined

  proxy.a = 1;

  targetObject.a; // 1, since the assignment was forwarded to the target object
}

// The following code snippet demonstrates how to use a proxy to create a
// read-only object.

{
  const targetObject = {
    a: 1,
    b: 2,
    c: 3,
  };

  const handler = {
    set(targetObject, key, value) {
      throw new Error('This object is read-only');
    },
  };

  const proxy = new Proxy(targetObject, handler);

  // !proxy.a = 1; // throws an error
}

// As proxies are their own objects, they do not have access to a target
// object's private properties. The following code snippet demonstrates this.

{
  class Secret {
    #secret;
    constructor(secret) {
      this.#secret = secret;
    }

    get secret() {
      return this.#secret.replace(/\d+/, '[REDACTED]');
    }
  }

  const aSecret = new Secret('123456');

  console.log(aSecret.secret);

  const proxy = new Proxy(aSecret, {});

  // ! console.log(proxy.secret); // throws an error
}

// To fix this, you can use a proxy to create a new object that has access to
// the target object's private properties.

{
  class Secret {
    #secret;
    constructor(secret) {
      this.#secret = secret;
    }

    get secret() {
      return this.#secret.replace(/\d+/, '[REDACTED]');
    }
  }

  const aSecret = new Secret('123456');

  console.log(aSecret.secret);

  const proxy = new Proxy(aSecret, {
    get(targetObject, key) {
      return targetObject[key];
    },
  });

  console.log(proxy.secret);
}

// For private methods the methods this value will have to be redirected to the
// target object.

{
  class Secret {
    #x = 1;
    x() {
      return this.#x;
    }
  }

  const aSecret = new Secret();

  const proxy = new Proxy(aSecret, {
    get(targetObject, key, receiver) {
      const value = targetObject[key];
      if (typeof value === 'function') {
        return function (...args) {
          return value.apply(this === receiver ? targetObject : this, args);
        };
      }
      return value;
    },
  });

  console.log(proxy.x()); // 1
}

// A validator proxy can be used to validate the setting of properties on an
// object.

{
  const validator = {
    set(targetObject, key, value) {
      if (key === 'age') {
        if (typeof value !== 'number') {
          throw new Error('The value must be a number');
        }
        targetObject[key] = value;
      }

      targetObject[key] = value;

      return true;
    },
  };

  const person = new Proxy({}, validator);

  person.age = 100;

  //! person.age = 'young'; // throws an error
}

//  More complex examples can be found in the following MDN article:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
