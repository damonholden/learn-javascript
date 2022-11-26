// Promise methods can be chained. This is especially useful when you need to do
// further promise-based computation with the resolution of a previous promise.

{
  fetch('https://www.boredapi.com/api/activity')
    .then((response) => response.json())
    .then((data) => console.log(`💡 ${data.activity}`));

  console.log('🎃 synchronous');
}

// All potential errors within a promise chain can be captured with a single
// .catch() method:

{
  fetch('https://httpstat.us/404')
    .then((response) => response.json())
    .then((data) => console.log(`💡 ${data.activity}`))
    .catch((error) => console.error(`UH-OH! ${error}`));

  console.log('🎃 synchronous');
}

// https://youtu.be/vn3tm0quoqE
