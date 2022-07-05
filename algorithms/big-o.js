addNumbersUpTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

addNumbersUpTo(10);

// In this example, the time it takes for the function to complete could be expressed as 'n + 2'.
// 1 for 'let sum = 0'
// n for each time the code within the 'for' statement block runs, which is determined on the functions input.
// 1 for the 'return sum'
// Therefore, the worst-case time complexity of this function would be O(n) - Linear
