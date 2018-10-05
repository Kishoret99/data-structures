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

    push(value) {
        let newNode = new Node(value);
        if(this.head == null) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while(currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = newNode
        }
    }

    print() {
        let currNode =  this.head;
        while(currNode) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }

    printFromEnd(index) {
        let currNode = this.head;
        let indexNode = this.head;
        let counter = 0;
        while(counter < index) {
            currNode = currNode.next;
            counter++;
        }
        while(currNode) {
            indexNode = indexNode.next;
            currNode =  currNode.next;
        }

        console.log(indexNode.value);
    }
}

let a = new LinkedList();


a.push(100);
a.push(200);
a.push(300);
a.push(500);
a.push(600);
a.push(700);
a.push(800);
a.push(900);

a.printFromEnd(1)