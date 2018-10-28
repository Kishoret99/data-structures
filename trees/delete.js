class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    
    insert(value) {
        let newNode =  new Node(value);
        if(this.root == null) {
            this.root = newNode;
            return;
        }
        let currNode = this.head;
        while(currNode.value > newNode.value) {
            currNode = currNode.left
        }
    }
}