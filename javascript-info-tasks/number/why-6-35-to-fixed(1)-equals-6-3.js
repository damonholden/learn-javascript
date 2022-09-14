// According to the documentation Math.round and toFixed both round to the
// nearest number: 0..4 lead down while 5..9 lead up.

// However, the following breaks that rule:

6.35.toFixed(1);

// the easiest way to fix this kind of inaccuracy is to multiply the subject
// number, then divide it by the same amount after the decimal operation.

Math.round(6.35 * 10) / 10;
