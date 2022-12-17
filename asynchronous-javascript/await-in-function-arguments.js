// a look into the behavior of the await keyword in function arguments:

async function getFruit(fruit) {
  const fruits = {
    apple: '🍎',
    banana: '🍌',
    peach: '🍑',
  };

  return fruits[fruit];
}

async function getFruitWithAwait(fruit) {
  console.log(await getFruit(fruit));
}

async function getFruitWithoutAwait(fruit) {
  console.log(getFruit(fruit));
}

async function getFruitWithAwaitOutsideFunction(fruit) {
  const gotFruit = await getFruit(fruit);
  console.log(gotFruit);
}

getFruitWithAwait('banana');
getFruitWithoutAwait('peach');
getFruitWithAwaitOutsideFunction('apple');

// it seems the await keyword within a function invocation is valid and works
// the way you would want it to. `getFruitWithAwaitOutsideFunction` and
// `getFruitWithAwait` are effectively the same.
