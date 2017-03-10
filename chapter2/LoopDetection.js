const { List, makeList, Node } = require('./LinkedLists');
const { Chai } = require('chai');

const LoopDetection = (list) => {

	let copyHead = list.head;
	let runner = list.head;
	let walker = list.head;

	while (runner){
		runner = runner.next.next;
		walker = walker.next;

		if (runner === walker){
			break;
		}
	}
	walker = copyHead;
	while (runner !== walker){
		runner = runner.next;
		walker = walker.next;
	}

	return walker;
}

// TESTING 

let list1 = makeList('1234'.split('').map(Number));

let six = new Node(6);
let five = new Node(5);
let nine = new Node(9);

six.next = five;
five.next = nine;
nine.next = list1.last;

list1.last.next = six;

console.log(LoopDetection(list1));