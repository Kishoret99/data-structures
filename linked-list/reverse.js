class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.lenth = 0
    }

    push(value) {
        let current = this.head;
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current =  this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let previous;
        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            this.head = current;
            current = next;
        }
    }
}








let a = new LinkedList();
a.push('1');
a.push('2');
a.push('3');
a.push('4');
a.push('5');
a.push('6');

a.reverse();
a.print();

function reverse(list) {
    while(list.head) {

        return reverse(list)
    } 

}
