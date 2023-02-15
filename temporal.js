const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');

// https://dev.to/yenyih/temporal-instead-of-date-3e0d

// The current Date object is widely considered to be a flawed API. It has
// several issues, including:
// 	- It is not immutable
// 	- It is not thread-safe
// 	- It is not timezone-aware
// 	- It is not calendar-aware
// 	- etc.

// The Temporal proposal is an attempt to address these issues. It is currently
// in Stage 3, which means that it is feature complete and is awaiting
// implementation in browsers and Node.js.

// Data types:

//  - temporal.PlainDateTime:

{
	// PlainDateTime is an object that represents a date and time without any
	// timezone or calendar information.

	// You can create a PlainDateTime object from the current time using the
	// method of the same name:

	const time = Temporal.Now.plainDateTimeISO();
	console.log(time.toString());

	// You can also create a PlainDateTime object using the constructor and
	// specify a timezone:

	const date = new Temporal.PlainDateTime(2022, 1, 1);
	console.log(date.toString());

	// You can also create a PlainDateTime object using the from method and
	// specify a timezone:
	const date1 = Temporal.PlainDateTime.from('2022-01-01');
	console.log(date1.toString());

	const date2 = Temporal.PlainDateTime.from({ year: 2022, month: 1, day: 1 });
	console.log(date2.toString());
}
