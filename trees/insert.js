class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode =  new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        var currNode = root;
        if(currNode.value > newNode.value) {
            if (!currNode.left) {
                currNode.left = newNode;
            } else {
                this.insertNode(currNode.left, newNode);
            }
        } else {
            if(!currNode.right) {
                currNode.right = newNode;
            } else {
                this.insertNode(currNode.right, newNode);
            }
        }
    } 
}

var a = new LinkedList();
a.insert(10);
a.insert(1);
a.insert(12);
a.insert(5);
a.insert(7);
console.log(a);
console.log(a.root.left.right)