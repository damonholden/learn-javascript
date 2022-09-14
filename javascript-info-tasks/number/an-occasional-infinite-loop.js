// This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// 10 is never reached because of the precision losses when adding fractions
// like 0.2

// conclusion: evade equality checks when working with decimal fractions.
