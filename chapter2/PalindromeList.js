const { List, makeList } = require('./LinkedLists');

const palindromeList = (list) => {
	if (!list || !list.data)
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
	if (list.data !== null)
		len++;
	list = list.next;
	if (len === 0)
		throw new Error('Please input a valid list.');

	while (list){
		len++;
		copy.pushFront(list.data);
		list = list.next;
	}

	if (len === 1){
		return true;
	}

	let stopping = len % 2 === 0 ? len / 2 : Math.floor(len / 2);

	for (stopping; stopping > 0; stopping--){
		// console.log('Rev data:', rev.data);
		// console.log('Head data:', head.data);

		if (rev.head.data !== head.data)
			return false;
		rev.head = rev.head.next;
		head = head.next;
	}

	return true;
}

module.exports = { palindromeList };