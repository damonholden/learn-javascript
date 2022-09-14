'use strict';

  let str = 'Hello';

  str.test = 5;

  str.test;

// depending on whether the 'use strict' directive is present or not, this code
// will either throw an error or return undefined respectively.
