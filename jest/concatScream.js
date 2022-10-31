function concatScream() {
  return Array.from(arguments).join('').toUpperCase() + '!';
}

module.exports = concatScream;

// basic example of a testable javascript function
