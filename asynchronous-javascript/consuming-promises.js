{
	fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
	.then((response) => response.json())
	.then((json) => {
		return json.height + 1
	})
	.then((number) => console.log(number))
}

{
  const getPokemon = async (pokemon) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error('uh oh... something bad happened');
    }
  };

  // getPokemon('charmander');
}
