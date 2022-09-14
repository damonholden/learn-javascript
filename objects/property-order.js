// It seems that the order that javascript takes object properties is in
// creation order, unless a property name can be read as an integer, then those
// get ordered first.

const stuff = {
  '1': 'george',
  '3': 'don',
  'ggg': 'greg',
  '4': 'ben',
  '2': 'hazel',
}

for (let key in stuff) {
  console.log(key)
}
