// string concatenation instead of addition
{
  let a = prompt('first number?', 1); // '1'
  let b = prompt('second number?', 2); // '2'
  alert(a + b); // '12'
}

// fix addition issue with the unary + operator
{
  let a = +prompt('first number?', 1); // 1
  let b = +prompt('second number?', 2); // 2
  alert(a + b); //3
}
