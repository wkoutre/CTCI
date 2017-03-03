const List = require('./LinkedLists.js').List;
const makeList = require('./LinkedLists.js').makeList;

const palindromeList = (list) => {
	if (!list)
		throw new Error('Please input a valid list.');

	/*

	Assuming we don't know the length of the list
	I could iterate through, make a hash table and keep track of the number of characters, then:
	 	-- if length of word is EVEN, there can be no odd number of any single character
	 	-- if length of word is ODD, there can be only ONE odd number of any single character

	But...

	Instead, I'm going to create another list -- a copy of the first -- , reverse it, and compare the two lists

	*/
	let copy = new List(list.data);
	let rev = copy;
	let head = list, len = 0;
	list = list.next;
	while (list){
		len++;
		copy.pushFront(list.data);
		list = list.next;
	}

	console.log(`Len = ${len}`);

	if (len === 1){
		return true;
	}

	let stopping = len % 2 === 0 ? len / 2 : Math.floor(len / 2) + 1;

	for (stopping; stopping > 0; stopping--){
		console.log('Rev data:', rev.data);
		console.log('Head data:', head.next.data);

		if (copy.head.data !== head.data)
			return false;
		copy.head = copy.head.next;
		head = head.next;
	}

	return true;
}

const test = () => {
	let list1 = makeList('hannah'.split(''));

	palindromeList(makeList('hannah'.split('')).head)
}