// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
  const number = prompt('give a number', '');

  while (!isFinite(number)) {
    if (number === null || number === '') {

      return null;
    }
    number = +prompt('give an actual number, please', '');
  }

  return +number;
}
