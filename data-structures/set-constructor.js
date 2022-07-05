const CustomSet = function () {
  let collection = [];

  this.has = (item) => collection.indexOf(item) !== -1;

  this.items = () => collection;

  this.add = (item) => (this.has(item) ? false : collection.push(item) && true);

  this.remove = (item) =>
    this.has(item) ? !!collection.splice(collection.indexOf(item), 1) : false;

  this.size = () => collection.length;

  this.union = (otherSet) => {
    let unionSet = new CustomSet();
    const firstSet = this.items();
    const secondSet = otherSet.items();

    for (item of firstSet) unionSet.add(item);
    for (item of secondSet) unionSet.add(item);
    return unionSet.items();
  };

  this.intersection = (otherSet) => {
    let intersectionSet = new CustomSet();
    const firstSet = this.items();
    for (item of firstSet) otherSet.has(item) && intersectionSet.add(item);
    return intersectionSet.items();
  };

  this.difference = (otherSet) => {
    let differenceSet = new CustomSet();
    const firstSet = this.items();
    for (item of firstSet) !otherSet.has(item) && differenceSet.add(item);
    return differenceSet.items();
  };

  this.subset = (otherSet) => {
    const firstSet = this.items();
    return firstSet.every((item) => otherSet.has(item));
  };
};

let animalSetA = new CustomSet();
animalSetA.add(`duck`);
animalSetA.add(`panda`);
animalSetA.add(`dog`);
animalSetA.add(`cat`);
animalSetA.add(`otter`);
animalSetA.add(`parakeet`);
animalSetA.add(`cat`);

let animalSetB = new CustomSet();
animalSetB.add(`goose`);
animalSetB.add(`goose`);
animalSetB.add(`bear`);
animalSetB.add(`dog`);
animalSetB.add(`cat`);
animalSetB.add(`badger`);
animalSetB.add(`parrot`);

let animalSetC = new CustomSet();
animalSetB.add(`dog`);
animalSetB.add(`cat`);

animalSetA.items();
animalSetB.items();
animalSetB.items();
animalSetB.items();

animalSetA.union(animalSetB);

animalSetA.intersection(animalSetB);

animalSetA.difference(animalSetB);

animalSetA.subset(animalSetB);

animalSetC.subset(animalSetA);

let animalSetD = new CustomSet();
animalSetD.add(`duck`);
animalSetD.add(`swan`);
animalSetD.add(`goose`);
animalSetD.add(`pigeon`);

animalSetD.size();
animalSetD.items();

animalSetD.remove(`pigeon`);
animalSetD.remove(`pigeon`);

animalSetD.size();
animalSetD.items();
