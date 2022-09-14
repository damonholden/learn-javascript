// Create a function multiplyNumeric(obj) that multiplies all numeric property
// values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: 'my menu',
}

const multiplyNumeric = (object) => {
  for (property in object) {
    if (typeof object[property] === 'number') {
      object[property] *= 2;
    }
  }
}

multiplyNumeric(menu)

menu
