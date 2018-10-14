class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode =  new Node(value);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let currNode =  this.head;
        while(currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = newNode
    }

    valueOf(index) {
        let currNode = this.head;
        let counter = 0;
        if(!currNode) {
            return null;
        } 
        while(counter < index) {
            currNode = currNode.next;
            counter++
        }
        console.log(currNode.value);
    }

    createLoop(index) {
        let currNode = this.head;
        if(index == 0) {
            while(currNode) {
                currNode = currNode.next;
            }
            currNode.next = this.head;
        } else {
            let counter = 0;
            let indexNode;
            while(counter < index) {
                indexNode = currNode.next;
                counter++
            }
            currNode = indexNode
            while(currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = indexNode;
        }
    }
}

let a  = new LinkedList();
a.insert(1);a.insert(2);a.insert(3);a.insert(4);a.insert(5);a.insert(6);a.insert(7);
a.valueOf(0);
a.createLoop(1)
// console.log(a)