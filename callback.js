console.log('one');
const log2 = () => console.log('two');
const getCallback = () => () => {
  log2();
};
getCallback();
console.log('three');
