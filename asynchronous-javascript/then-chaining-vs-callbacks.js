// The following code is an example of what is known as callback hell or the
// pyramid of doom. This code logs a message every 2 seconds.
setTimeout(() => {
  console.log(`first`);
  setTimeout(() => {
    console.log(`second`);
    setTimeout(() => {
      console.log(`third`);
      setTimeout(() => {
        console.log(`fourth`);
        setTimeout(() => {
          console.log(`fifth`);
          setTimeout(() => {
            console.log(`sixth`);
            setTimeout(() => {
              console.log(`seventh`);
              setTimeout(() => {
                console.log(`eighth`);
                setTimeout(() => {
                  console.log(`ninth`);
                  setTimeout(() => {
                    console.log(`tenth`);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// the following code does the same thing but is instead promise-based. Notice
// how it is much more readable.

const logPromise = (message) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log(message)), 2000);
  });
  return promise;
};

logPromise('first')
  .then(() => logPromise('second'))
  .then(() => logPromise('third'))
  .then(() => logPromise('forth'))
  .then(() => logPromise('fifth'))
  .then(() => logPromise('sixth'))
  .then(() => logPromise('seventh'))
  .then(() => logPromise('eighth'))
  .then(() => logPromise('ninth'))
  .then(() => logPromise('tenth'));
