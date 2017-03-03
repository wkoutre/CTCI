const { List, makeList, Node } = require('./LinkedLists');
const { Chai } = require('chai');

// Assuming we have the length of the lists to begin

const Intersection = (l1, l2) => {
	if (!l1 || !l2 || !l1.head.data || !l2.head.data)
		throw new Error('Please enter valid lists.');

	if (l1.length < l2.length){
		return Intersection(l2, l1);
	}

	let dif = l1.length - l2.length;
	for (dif; dif > 0; dif--){
		l1.head = l1.head.next;
	}

	while (l1.head && l2.head){
		if (l1.head === l2.head){
			return (l1.head);
		}
		l1.head = l1.head.next;
		l2.head = l2.head.next;
	}

	return false;
}

let list1 = makeList('1234'.split('').map(Number));
let list2 = makeList('987'.split('').map(Number));

let six = new Node(6);
let five = new Node(5);

six.next = five;

list1.pushNodeBack(six);
list2.pushNodeBack(six);

console.log(Intersection(list1, list2));