function PriorityQueue() {
  let collection = [];

  this.printCollection = () => {
    console.log(collection);
    return collection;
  };

  this.enqueue = (entry) => {
    if (this.isEmpty()) collection.push(entry);
    else {
      let added = false;
      for (index in collection) {
        if (entry[1] < collection[index][1]) {
          collection.splice(index, 0, entry);
          added = true;
          break;
        }
      }
      if (!added) collection.push(entry);
    }
  };

  this.dequeue = () => collection.shift()[0];

  this.front = () => collection[0];

  this.size = () => collection.length;

  this.isEmpty = () => collection.length === 0;
}

let chocolatePriorityQue = new PriorityQueue();

chocolatePriorityQue.enqueue([`galaxy`, 0]);

chocolatePriorityQue.front();

chocolatePriorityQue.enqueue([`snickers`, 1]);

chocolatePriorityQue.front();
chocolatePriorityQue.printCollection();

chocolatePriorityQue.enqueue([`mars`, 5]);

chocolatePriorityQue.front();
chocolatePriorityQue.printCollection();

chocolatePriorityQue.enqueue([`dairy milk`, 4]);
chocolatePriorityQue.front();
chocolatePriorityQue.printCollection();

chocolatePriorityQue.front();
chocolatePriorityQue.size();

chocolatePriorityQue.dequeue();

chocolatePriorityQue.size();
chocolatePriorityQue.front();
