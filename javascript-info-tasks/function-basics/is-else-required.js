// there is no effective difference in the following 2 blocks of code:

// with else:
{
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm(`Did parents allow?`);
    }
  }
}

//without else:
{
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm(`Did parents allow?`);
  }
}
