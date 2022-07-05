function Queue() {
  let collection = [];

  this.print = () => {
    console.log(collection);
    return collection;
  };

  this.enqueue = (element) => collection.push(element);

  this.dequeue = () => collection.shift();

  this.front = () => collection[0];

  this.size = () => collection.length;

  this.isEmpty = () => collection.length === 0;
}

let mcDonaldsQueue = new Queue();

mcDonaldsQueue.enqueue(`Sarah`);
mcDonaldsQueue.enqueue(`Justin`);
mcDonaldsQueue.enqueue(`Mike`);
mcDonaldsQueue.enqueue(`Niko`);
mcDonaldsQueue.enqueue(`Olivia`);
mcDonaldsQueue.enqueue(`Scott`);

mcDonaldsQueue.print();

mcDonaldsQueue.size();

mcDonaldsQueue.front();

mcDonaldsQueue.dequeue();

mcDonaldsQueue.size();
mcDonaldsQueue.front();

mcDonaldsQueue.isEmpty();

mcDonaldsQueue.dequeue();
mcDonaldsQueue.dequeue();
mcDonaldsQueue.dequeue();
mcDonaldsQueue.dequeue();
mcDonaldsQueue.dequeue();

mcDonaldsQueue.size();
mcDonaldsQueue.front();

mcDonaldsQueue.isEmpty();
