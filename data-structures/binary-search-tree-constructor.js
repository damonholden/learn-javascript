class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) return (this.root = new Node(data));
    else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) return (node.left = new Node(data));
          else if (node.left !== null) return searchTree(node.left);
        } else if (data > node.data) {
          if (node.right === null) return (node.right = new Node(data));
          else if (node.right !== null) return searchTree(node.right);
        } else return null;
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) current = current.left;
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) current = current.right;
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) current = current.left;
      else current = current.right;
      if (current === null) return null;
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;
      if (data === node.data) {
        if (node.left == null && node.right == null) return null;
        if (node.left == null) return node.right;
        if (node.right == null) return node.left;
        let tempNode = node.right;
        while (tempNode.left !== null) tempNode = tempNode.left;
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(4);
bst.findMin();
bst.findMax();

bst.add(7);
bst.findMin();
bst.findMax();

bst.add(9);
bst.findMin();
bst.findMax();

bst.add(5);
bst.findMin();
bst.findMax();

bst.add(3);
bst.findMin();
bst.findMax();

bst.add(2);
bst.findMin();
bst.findMax();

bst.add(4);

bst.find(9);
bst.find(7);
bst.find(2);
bst.find(1);

bst.isPresent(7);
bst.isPresent(2);
bst.isPresent(8);

bst.remove(8);
bst.remove(4);

const util = require(`util`);
console.log(
  util.inspect(bst, { showHidden: false, depth: null, colors: true })
);
