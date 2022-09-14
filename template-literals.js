// template literals can be written as pure strings:

`hello my name is jack`;

// they also allow stings to be written on multiple lines:

`hello
here
are
multiple
lines`;

// When console logged, this string will appear
// as it does in this file.

// template literals can also have what are called placeholders
//  which (delimited by ${}) which allow expressions to be embedded
//  in the string:

{let name = `Greg`
let pet = {
  name: 'George',
  species: "dog"
};

`${name} has a ${pet.species} who's name is ${pet.name}.`}

// what is actually happening behind the scenes in the previous bit of code,
// is the template literal is being parsed into a default 'tagged function'
// that does some string interpolation.

// You can actually create you're own function for a template literal, which
// is called a tag function. The first argument of the function contains an array of
// strings, the rest of the arguments are the placeholder expressions:

{
  myTag = (strings, ownerName, petSpecies, petName, ) => {
    const string0 = strings[1];
    const string1 = strings[2];
    const string2 = strings[3];

    return `This is a custom message => ${ownerName}${string0}${petSpecies}${string1}${petName}${string2}`;
  };

  let name = `Greg`;
  let pet = {
    name: 'George',
    species: 'dog',
  };

  myTag`${name} has a ${pet.species} who's name is ${pet.name}.`;
}

// These tag functions don't even need to return a string:

{
  function template(strings, ...keys) {
    return (...values) => {
      const dict = values[values.length - 1] || {};
      const result = [strings[0]];
      keys.forEach((key, i) => {
        const value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    };
  }

  const t1Closure = template`${0}${1}${0}!`;
  t1Closure('Y', 'A');
  const t2Closure = template`${0} ${'foo'}!`;
  t2Closure('Hello', { foo: 'World' });
  const t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
  t3Closure('foo', { name: 'Damon', age: 24 });
  t3Closure({ name: 'Damon', age: 24 });
}

// For a tag function to not process escape sequences, the raw tag function

// allows this:

{
  tagFunction = (strings) => strings.raw[0];
  tagFunction`hello \n I am a guy \n who likes games`;
}
{
  tagFunction = (strings) => strings[0];
  tagFunction`hello \n I am a guy \n who likes games`;
}

// A lot more to learn here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation
