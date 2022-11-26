const axios = require('axios');

// the following code fails because the node fetch api returns a promise
{
  let response = axios.get('https://www.boredapi.com/api/activity/');
  console.log(response.data.activity);
}

// the .then() and .catch() promise methods can be used to wait until a promise
// has been fulfilled and then do something.

//.then() demo:
{
  axios
    .get('https://www.boredapi.com/api/activity/')
    .then((response) => {
      console.log(response.data.activity);
    })
    .catch((err) => {
      console.error(`UH-OH!, ${err}`);
    });
}

//.catch() demo:
{
  axios
    .get('https://httpstat.us/404')
    .then((response) => {
      console.log(response.data.activity);
    })
    .catch((err) => {
      console.error(`UH-OH!, ${err}`);
    });
}

// its important to note that only code within the .then() and .catch() methods
// are executed after the promise has been fulfilled. Any code after the promise
// chain will execute immediately after the return of a promise, not after the resolution.

// You'd expect the last console log here to execute last, but the console tells
// a different story. Any code that depends on the resolution of a promise,
// should be inside a promise method.

{
  axios
    .get('https://www.boredapi.com/api/activity/')
    .then((response) => {
      console.log(response.data.activity);
    })
    .catch((err) => {
      console.error(`UH-OH!, ${err}`);
    });

		console.log('finally');
}

// There is a cleaner syntax for handling promises - the await keyword and async
// functions. Again, any code outside of the async function will still execute
// on immediately after the promise return.

{
  async function getActivity() {
    try {
      let response = await axios.get('https://www.boredapi.com/api/activity/');
      console.log(response.data.activity);
    } catch (error) {
      console.error(`UH-OH!, ${error}`);
    }
  }

  getActivity();

  console.log('finally');
}

// https://youtu.be/li7FzDHYZpc
