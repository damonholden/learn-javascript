// The following code is completely synchronous. when codeBlocker() is called,
// the entire script is put on pause for a billion recursions. situations like
// this are especially problematic in the browser, where the ui is effectively
// frozen until expensive computations are complete.

{
  const tick = Date.now();
  const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

  const codeBlocker = () => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    return '🥲 billion loops done';
  };

  log('😋 synchronous 1');

  log(codeBlocker());

  log('🤪 synchronous 1');
}

// You may think the following code resolves the blocking issue as you are
// returning a promise. However the only thing moving off the main thread is the
// resolve string as a micro-task. The creation of the promise and the while loop is all still
// on the main thread.

{
  const tick = Date.now();
  const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

  const codeBlocker = () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      while (i < 1000000000) {
        i++;
      }
      resolve('🥲 billion loops done');
    });
  };

  log('😋 synchronous 1');

  codeBlocker().then(log);

  log('🤪 synchronous 1');
}

// the code can be refactored to run the code in a resolved promise's callback.
// This guarantees the code inside the resolve callback runs after all the
// synchronous code in the main thread.

{
  const tick = Date.now();
  const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

  const codeBlocker = () => {
    return Promise.resolve().then(() => {
      let i = 0;
      while (i < 1000000000) {
        i++;
      }
      return '🥲 billion loops done';
    });
  };

  log('😋 synchronous 1');

  codeBlocker().then(log);

  log('🤪 synchronous 1');
}
