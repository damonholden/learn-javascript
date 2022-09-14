// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

const isEmpty = object => {
  for (let property in object) {
    return false;
  }
  return true;
};
