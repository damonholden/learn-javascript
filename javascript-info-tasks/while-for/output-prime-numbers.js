let n = 100

outer: for (let i = 2; i <= n; i++) {
  for (let x = 2; x < i; x++) {
    if (i % x === 0) {
      continue outer;
    }
  }
  alert(i);
}

// a lot of room to optimise here
