const arr = ['jhon', 'lisa', 'jhon', 'mark'];
const newArr = [];

higher: for (value of arr) {
  if (!newArr.length) {
    newArr.push({ [value]: 1 });
    continue;
  }
  for (object of newArr) {
    if (object[value]) {
      object[value] += 1;
      continue higher;
    }
  }
  newArr.push({ [value]: 1 });
}
