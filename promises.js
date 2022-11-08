// promises
{
  let testPromise = new Promise((resolve, reject) => {
    let x = 0;
    return x === 0 ? resolve('Success') : reject('Error');
  });

  testPromise.then(
    (result) => alert(result),
    (error) => alert(error)
  );

  testPromise.then((result) => alert(result)).catch((error) => alert(error));
}

// async
{
  async function test() {
    return Promise.resolve(1);
  }
  const test = async () => {
    return 1;
  };
  test().then(alert);
}

// await is used when you want to wait for a promise to resolve or reject before
// moving on to the next line of code. It can only be used inside an async
// function.

{
  const test = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
    let result = await promise;
    alert(result);
  };
}

// error handling
{
  {
    const test = async () => {
      await Promise.reject(new Error('oops!', options, fileName, lineNumber));
    };
  }
  {
    const test = async () => {
      throw new Error('oops!');
    };
  }
  {
    const test = async () => {
      try {
        let res = await fetch('url');
        let user = await res.json();
      } catch (err) {
        alert(err);
      }
    };
  }
}
