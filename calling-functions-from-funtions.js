const functionSelector = (number) => {
  if (number === 1) return () => 1;
  if (number === 2) return () => 2;
  if (number === 3) return () => 3;
};

console.log(functionSelector(1)());
// this function returns the respective anonymous function from the f
