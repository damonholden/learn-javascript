// async functions always immediately return a promise:

const mightGetEVENNumber = () => {
  return new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10);

    if (number % 2 === 0) {
      resolve(number);
    }

    reject(new Error('not even'));
  });
}

const delay = async () => {
  try {
    let number = await mightGetEVENNumber();
    return number;
  } catch (err) {
    console.log(err);
  }
};

console.log(delay());
