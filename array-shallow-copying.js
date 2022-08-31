// It seems some array methods can result in shallow copying
// Here is an example using the '.filter' array method

const arrayA = ['noodles', { list: ['eggs', 'flour', 'water'] }];
const arrayB = arrayA.filter(value => typeof value !== 'string');

arrayA;
arrayB;

// Modifying an object property in one of the array's causes both objects to change, as they share referential equality.

arrayA[1].list = ['eggs', 'flour'];

arrayA;
arrayB;

// However, assigning a completely new object here will create a new object in memory, so changes are isolated.

arrayA[1] = { list: ['sauce', 'peppers'] };

arrayA;
arrayB;

// Important thing is to be aware of shallow copying, as it can result in errors that are tricky to debug.
// This also ties into a more fundamental JavaScript topic: referential equality.
//  - There are hooks in react dedicated to handling issues that arise from this topic.

// Learn more about shallow copying:
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// Learn more about referential equality:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://www.geeksforgeeks.org/what-is-object-equality-in-javascript/#:~:text=Referential%20equality%3A%20We%20can%20say,or%20the%20strict%20equality%20operator.
