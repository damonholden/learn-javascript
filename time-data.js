// Until temporal is fully standardised and widely implemented,
// the only built-in way to deal with time data is with the Date object class.

//Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
Date.now();

Date.UTC(2022, 6, 24, 12, 24);

const someDate = new Date(Date.UTC(2022, 6, 24, 12, 24));
