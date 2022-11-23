// while .then() is used for handling the resolve of a promise, you can also use
// it for further computation that that isn't necessarily promise based.

fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
	.then((response) => response.json())
	.then((json) => {
		return json.height + 1
	})
	.then((number) => console.log(number))
