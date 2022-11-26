'use strict'

// Promises, while an improvement over callbacks, can still be hard to read,
// especially when a promise chain is long. async await is simply syntactic sugar to make asynchronous code
// read like synchronous code.

// the async function makes a function's return value become the resolution of a
// promise. Both of the following code snippets are functionally the same. The
// first is an async function that is wrapping the return value in a
// `Promise.resolve()` method. The second is a regular function that achieves the
// same effect through literal syntax.

{
  const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return fruits[name];
  };

	getFruit('watermelon').then(console.log)

}

{
  const getFruit = (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return Promise.resolve(fruits[name]);
  };

	getFruit('banana').then(console.log)
}

//  The async function also creates a context for using the await keyword. This
//  allows an async function's execution to be paused. In the following snippet,
//  there are 2 cases where the await keyword is used to wait for the resolution
//  of another promise before continuing.

{
	const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return fruits[name];
  };

	const makeSmoothie = async () => {
    const a = await getFruit('banana')
    const b = await getFruit('mango')

		return [a, b]
	}

	makeSmoothie().then(console.log)
}

// the async await combo also allows for the easy sharing of resolved values.
// This is demonstrated in the code above where 2 promise values are resolved
// and returned in the same array. This would be trickier to achieve in promise
// chaining:

{
  const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return fruits[name];
  };

  const makeSmoothie = () => {
    let a;
    return getFruit('banana')
      .then((v) => {
        a = v;
        return getFruit('mango');
      })
      .then((v) => [v, a]);
  };

  makeSmoothie().then(console.log);
}

// a pitfall of async functions is the unnecessary use of await. It should only be used
// sequentially if a value is dependent on the resolved value of a previous
// await. Promise.all() is a good way to get multiple promises to resolve
// concurrently. In the following 2 snippets of `makeSmoothie()` the Promise.all
// version is twice as fast because there is no waiting.

{
  const tick = Date.now();
  const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

  const delay = async (seconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds);
    });
  };

  const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    await delay(1000);

    return fruits[name];
  };

  {
    const makeSmoothie = async () => {
      const a = await getFruit('banana');
      const b = await getFruit('mango');

      return [a, b];
    };

    makeSmoothie().then(log);
  }

  {
    const makeSmoothie = async () => {
      const a = getFruit('banana');
      const b = getFruit('mango');
      const smoothie = Promise.all([a, b]);
      return smoothie;
    };

    makeSmoothie().then(log);
  }
}

// async functions also pair well with `try...catch` blocks as a way to catch
// errors instead of chaining a .catch() from the async function call. In the
// catch block you can do anything with the error itself, like log it, throw
// another error, or even return a different value.

{
  const tick = Date.now();
  const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

  const delay = async (seconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds);
    });
  };

  const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    await delay(1000);

    return fruits[name];
  };

  const badSmoothie = async () => {
    try {
      const a = getFruit('banana');
      const b = getFruit('mango');
      const smoothie = Promise.all([a, b]);

			throw 'BROKEN!'

      return smoothie;
    }

		catch (error) {
      console.error(`YIKES 😬 ${error}`);
			// return `this will do`
			// throw `its broken!!!!!!!!!!!!!!!!!!!!!!!!`
    }
  };

  badSmoothie().then(log).catch((err) => console.log('consumer is handling error'));
}
