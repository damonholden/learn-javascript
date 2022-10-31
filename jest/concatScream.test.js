const concatScream = require('./concatScream');

test('concatenates two strings and screams', () => {
  expect(concatScream('foo', 'bar')).toBe('FOOBAR!');
});

test('allows up to 5 arguments', () => {
  expect(concatScream('foo', 'bar', 'baz', 'qux', 'quux')).toBe('FOOBARBAZQUXQUUX!');
});

test('returns an empty string if no arguments are passed', () => {
  expect(concatScream()).toBe('!');
});

// basic suite of Jest tests for a simple javascript function
// this was also written with github copilot
