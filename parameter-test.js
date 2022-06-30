const someFunction = (p1, p2, p3, p4) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
};

someFunctionWithConditional = (p1, p2, p3, p4) => {
  if (p1) console.log(p1);
  if (p2) console.log(p2);
  if (p3) console.log(p3);
  if (p4) console.log(p4);
};

// someFunction(1, 2, 4);
// someFunction(1, 2, null, 4);

someFunctionWithConditional(null, 2, null, 4);

// seems like this way of writing functions with conditional arguments can be tricky
// either a conditional will need to be written within the function or just write a better function
