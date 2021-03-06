class Node {
	constructor(data){
		this.data = data,
		this.next = null
	}	
}

class List {
	constructor(data){
		this.head = new Node(data), // remember this...
		this.length = 1,
		this.last = this.head,
		this.first = this.head
	}

	pushBack(data) {
		let node = new Node(data);
		this.last.next = node;
		this.last = this.last.next;
		this.length++;
	}

	pushNodeBack(node) {
		this.last.next = node;
		this.length++;
		while (this.last.next){
			this.last = this.last.next;
			this.length++;
		}
	}

	pushFront(data){
		let node = new Node(data);

		node.next = this.head;
		this.head = node;
		this.length++;
	}

	peekBack() {
		return this.last.data;
	}

	peekFront() {
		return this.head.data;
	}

	printList() {
		let arr = [];
		let copy = this.head;

		while (this.head){
			arr.push(this.head.data);
			this.head = this.head.next;
		}

		this.head = copy;
		console.log("End List:", arr);
	}

	toArr() {
		let arr = [];
		let copy = this.head;

		while (this.head){
			arr.push(this.head.data);
			this.head = this.head.next;
		}

		this.head = copy;
		return arr;	
	}

	getFront() {
		let ret = this.head;
		this.head = this.head.next;

		return ret;
	}
}

makeList = (arr) => {
	if (!arr || typeof arr !== 'object')
		throw new Error("Invalid array.")

	let list = new List(arr[0]);

	for (let i = 1; i < arr.length; i++){
		list.pushBack(arr[i]);
	}

	return list;
}

module.exports = { List, makeList, Node };