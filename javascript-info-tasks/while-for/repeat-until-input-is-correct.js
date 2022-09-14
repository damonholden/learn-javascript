{
  input = prompt(`input a number greater than 100`, ``);

  while (input < 100 && input !== null && input !== '') {
    input = prompt(`PLEEEEEEEEEEEEEEEEASE input a number greater than 100`, ``);
  }
}

{
  let input;
  do {
    input = prompt(`input a number greater than 100`, ``);
  } while (input < 100 && input !== null && input !== '');
}
