class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

module.exports = class Tree {
  constructor() {
    this.root = null
  }

  insertValue(val) {
    const _node = new Node(val)
    if (this.root === null) {
      this.root = _node
    } else {
      this.insertNode(this.root, _node)
    }
  }

  insertNode(current, _node) {
    if (_node.val === current.val) {
      console.log('this node already exists')
    } else if (_node.val > current.val) {
      if (current.right === null) {
        current.right = _node
      } else {
        this.insertNode(current.right, _node)
      }
    } else {
      if (current.left === null) {
        current.left = _node
      } else {
        this.insertNode(current.left, _node)
      }
    }
  }

  printTree() {
    console.log(this.printInOrder(this.root))
  }

  printInOrder(node) {
    if(node !== null) {
      this.printInOrder(node.left)
      return node.val
      this.printInOrder(node.right)
    }
  }
}