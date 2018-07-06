class Node{

	constructor(element){
		this.value = element;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.length = 0;
	}
	push(element){
		let newNode  = new Node(element);
		if(this.head == null){
			this.head  = newNode;
			this.length++;
		} else {
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = newNode;
		}
	}
	print(){
		if(this.length < 1){
			console.log('nothing to prt');
			return;
		}
		var current  = this.head;
		while(current) {
			console.log('value is ', current.value);
			current = current.next;
		}
	}


}

var a = new LinkedList();
a.push(5);
a.print();
a.push(7);
a.print();
