// consider the following:
{const birthday = '18.04.1982';
const age = someCode(birthday);}

//which variables would be valid to make uppercase?:
const BIRTHDAY = '18.04.1982';
const age = someCode(birthday);

/* here, birthday is a valid uppercase constant because it's value is hard-coded
(in other words, it's value is known before execution)

Age however, will be evaluated in runtime. Its  constant int the sesne that
it's value does not change during code execution, but its value isnt known before
execution and can be different during each execution of the script, so it is less of
a constant than birthday. */
