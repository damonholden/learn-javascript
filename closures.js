// a closure is simply a function with reference to its surrounding state (also
// known as the lexical environment). Closures are created automatically whenever
// a function is created and allows the function to access its outer-scope. You
// most likely know what a closure is and how to use it, but just haven't given
// it a name.

function doesSomething() {
	const name = 'John'

	function logName() {
		console.log(name); // name can be accessed here because `logName` has a closure
	}
}

// a closure's Lexical environment consists of any local variables that were in
// scope the time the closure was created.
