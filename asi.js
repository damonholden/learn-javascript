/* Automatic Semicolon Insertion (ASI) generally means you do not need to
add semicolons to JavaScript source code, as the Javascript engine will interpret
new lines as implicit semicolons. */

// However, this does not always work as intended.

// Consider the following code:

alert('hello')
['and', 'goodbye'].forEach(alert);

/* You would expect 3 separate alerts from the code above,
but because there is no semicolon appended to the first alert
both lines are read as a single statement. In this case
only the first alert is called and a type error will occur for
the second line. */
