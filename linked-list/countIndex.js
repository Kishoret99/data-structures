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
			for(let i = 0; i < this.length; i++){
				current = current.head;
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
		for(let i = 0; i < this.length ; i++) {
		console.log('value is ', current.value)
		}

	}


}

var a = new LinkedList();
a.push(5);
a.push(7);
a.print();
