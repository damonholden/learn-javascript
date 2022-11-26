// to pass multiple values through a promise consumer, a good way to achieve
// this is to map the array of values to an array of promises, then
// Promise.all() the whole array. This executes the promises concurrently, so it
// should only be used with Promises that do not rely on the resolve value of
// another promise:

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

  const fruits = ['banana', 'watermelon', 'mango'];
  const smoothie = fruits.map(getFruit);

  Promise.all(smoothie).then(log);
}

// In situations where each promise needs to be awaited, things can get tricky.
// In the following example, the `.map()` array method callback does not await
// each callback like you would expect it to.

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

  const fruits = ['banana', 'watermelon', 'mango'];

fruits.map(async (value) => {
		const emoji = await getFruit(value)
		log(emoji)
		return emoji
	});
}

// To have each iteration in a loop await a promise, a traditional for loop is
// needed. awaiting in each iteration of the loop will pause each iteration
// until the promise is resolved.

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

	const fruitLoop = async(fruits) => {
		for (const fruit of fruits) {
			const emoji = await getFruit(fruit)
		log(emoji)
		}
	}

	fruitLoop(['banana', 'watermelon', 'mango'])
}

// a cool thing you can do for concurrent promises is actually await the entire
// loop construct:

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

	const smoothieLoop = async(v) => {
		for await (const fruit of v) {
			log(fruit)
		}
	}

  const fruits = ['banana', 'watermelon', 'mango'];
  const smoothie = fruits.map(getFruit);

	smoothieLoop(smoothie)
}

// the await keyword is also valid in `if` conditionals as well:

{
	const getFruit = async (name) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return fruits[name];
  };

	const fruitInspection = async() => {
		if (await getFruit('banana')  === '🍌') {
			console.log('nice banana bro')
		}
	}

	fruitInspection()
}

// https://youtu.be/vn3tm0quoqE?t=597
