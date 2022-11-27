// unlike `Promise.all()` which is effectively all or nothing in the sense that
// it will reject if any of the promises fail, `Promise.allSettled()` will
// return a promise that fulfils when all the promises settle, even if there are
// any rejections:

{
  const getFruit = async (fruit) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    return fruits[fruit];
  };

  const brokenGetFruit = async (fruit) => {
    const fruits = {
      banana: '🍌',
      mango: '🥭',
      watermelon: '🍉',
    };

    throw 'something broke!';

    return fruits[fruit];
  };

  Promise.allSettled([
    getFruit('banana'),
    brokenGetFruit('watermelon'),
    getFruit('mango'),
  ]).then(console.log);
}

// this method should only be used when the asynchronous tasks passed to it do
// not depend on each other.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
