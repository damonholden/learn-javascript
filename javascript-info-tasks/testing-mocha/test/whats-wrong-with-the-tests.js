//  consider the following spec:

{
  const assert = require('assert');
  const pow = (a, b) => a ** b;

  it('Raises x to the power n', function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
  });
}

// The previous spec is realistically 3 tests written as 3 asserts in one test function.
// The following separate the asserts into separate test to create a clearer spec and easier debugging

{
  const assert = require('assert');
  const pow = (a, b) => a ** b;

  describe(`Raises x to the power n`, () => {
    it('Raises 5 to the power 1', () => {
      assert.equal(pow(5, 1), 5);
    });

    it('Raises 5 to the power 2', () => {
      assert.equal(pow(5, 2), 25);
    });

    it('Raises 5 to the power 3', () => {
      assert.equal(pow(5, 3), 125);
    });
  });
}
