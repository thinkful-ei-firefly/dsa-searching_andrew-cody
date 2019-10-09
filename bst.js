const Queue = require('./queue')

class BST {
    //aside from key and value, all constructors should be = null or a BST class object
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        if (this.key === null) {
            this.key = key
            this.value = value
        }
        else if (this.key === key) {
            this.update(value)
        }
        else {
            if (key < this.key) {
                if (this.left === null) {
                    this.left = new BST(null, null, this)
                }
                this.left.insert(key, value)
            }
            else if (key > this.key) {
                if (this.right === null) {
                    this.right = new BST(null, null, this)
                }
                this.right.insert(key, value)
            }
            else if (key === this.left.getKey()) {
                this.left.update(value)
            } else if (key === this.right.getKey()) {
                this.right.update(value)
            }
            else {
                throw new Error('This line of code should never trigger. You broke something.')
            }
        }
    }

    getKey() {
        return this.key
    }

    find(key) {
        if (key === this.key) {
            return this.value
        }
        else if ((key < this.key) && (this.left !== null)) {
            return this.left.find(key)
        }
        else if ((key > this.key) && (this.right !== null)) {
            return this.right.find(key)
        }
        else {
            throw new Error("Key does not exist")
        }
    }

    remove(key) {
        if (key === this.key) {
            //key found
            if (this.left === null && this.right === null) { //no child
                this._replaceWith(null)
            }
            else if (this.left !== null && this.right === null) { //1 child on left
                this._replaceWith(this.left)
            }
            else if (this.left === null && this.right !== null) { //1 child on right
                this._replaceWith(this.right)
            }
            else if ((this.left !== null && this.right !== null)) { //2 children
                const successor = this.right._findMin();
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            else {
                throw new Error('This line of code should never trigger. You broke something.')
            }
        }
        else if ((key < this.key) && (this.left !== null)) {
            return this.left.remove(key)
        }
        else if ((key > this.key) && (this.right !== null)) {
            return this.right.remove(key)
        }
        else {
            throw new Error("Key does not exist")
        }
    }

    update(value) {
        this.value = value
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (this.left === null) {
            return this
        }
        else {
            return this.left._findMin();
        }
    }

    dfsPostOrder(keys=[]) {
        if (this.left) {
            keys = this.left.dfsPostOrder(keys);
        }
        if (this.right) {
            keys = this.right.dfsPostOrder(keys);
        }
        keys.push(this.key);
        return keys;
    }

    dfsPreOrder(keys=[]) {
        keys.push(this.key);
        if (this.left) {
            keys = this.left.dfsPreOrder(keys);
        }
        if (this.right) {
            keys = this.right.dfsPreOrder(keys);
        }
   
        return keys;
    }

    dfsInOrder(keys=[]) {
        if (this.left) {
            keys = this.left.dfsInOrder(keys);
        }
        keys.push(this.key);
        if (this.right) {
            keys = this.right.dfsInOrder(keys);
        }
        return keys;
    }

}

module.exports = BST