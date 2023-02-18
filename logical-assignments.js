// In javascript, there exists logical assignment operators that can be used to
// assign values to variables based on some condition.

// The logical assignment operators are:
// 1. Logical AND assignment (&&=)
// 2. Logical OR assignment (||=)
// 3. Logical nullish assignment (??=)

// Logical AND assignment (&&=):
// The logical AND assignment operator (&&=) assigns a value to a variable if
// the variable is truthy. If the variable is falsy, the value is not assigned.

{
	let x = 0;
	x &&= 1;
	console.log(x); // 0

	x = 1;
	x &&= 2;
	console.log(x); // 2
}

{
	let song = {
		title: 'I am the one',
		artist: 'Lil Dawg',
		genre: 'Hip Hop',
		lyrics: 'I am the one',
	};

	console.log((song.lyrics &&= 'There are lyrics.')); // There are lyrics.
}

// Logical OR assignment (||=):
// The logical OR assignment operator (||=) assigns a value to a variable if
// the variable is falsy. If the variable is truthy, the value is not assigned.

{
	let x = 0;
	x ||= 1;
	console.log(x); // 1

	x = 1;
	x ||= 2;
	console.log(x); // 1
}

{
	let lyrics = '';
	console.log((lyrics ||= 'I am the one')); // I am the one
}

// Logical nullish assignment (??=):
// The logical nullish assignment operator (??=) assigns a value to a variable
// if the variable is null or undefined. If the variable is not null or
// undefined, the value is not assigned.

{
	let x = null;
	x ??= 1;
	console.log(x); // 1

	x = 0;
	x ??= 2;
	console.log(x); // 0

	x = undefined;
	x ??= 3;
	console.log(x); // 3
}

{
	let song1 = { title: 'I am the one', artist: 'Lil Dawg', genre: 'Hip Hop' };
	let song2 = {
		title: 'not again',
		artist: 'Sheila',
		genre: 'Pop',
		lyrics: 'I am the one',
	};

	console.log((song1.lyrics ??= 'No lyrics available.')); // No lyrics available.
	console.log((song2.lyrics ??= 'No lyrics available.')); // I am the one
}

// These logical assignment operators can be used to assign default values to
// variables.
