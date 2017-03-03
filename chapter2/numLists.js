const List = require('./LinkedLists.js').List;

const SumLists = (l1, l2) => {
	if (!l1 || !l2)
		throw new Error('Invalid lists.');

	let sumHead = new List();
	let carry = 0;

	while (l1 && l2){
		let sum = l1.data + l2.data + carry;
		if (sum < 10){
			sumHead.pushBack(sum);
			carry = 0;
		} else {
			let rem = sum % 10;
			sumHead.pushBack(rem);
			carry = Math.floor(sum/10);
		}
		l1 = l1.next;
		l2 = l2.next;
	}

	while (l1){
		let sum = l1.data + carry;
		if (sum < 10){
			sumHead.pushBack(sum);
			carry = 0;
		} else {
			let rem = sum % 10;
			sumHead.pushBack(rem);
			carry = Math.floor(sum/10);
		}
		l1 = l1.next;
	}

	while (l2){
		let sum = l2.data + carry;
		if (sum < 10){
			sumHead.pushBack(sum);
			carry = 0;
		} else {
			let rem = sum % 10;
			sumHead.pushBack(rem);
			carry = Math.floor(sum/10);
		}
		l2 = l2.next;
	}

	if (carry){
		carry = Math.floor(sum/10);
	}

	return sumHead;
}

const testSumList = () => {
	let list1 = makeList('90'.split('').map(Number));
	let list2 = makeList('1234'.split('').map(Number));

	SumLists(list1, list2).printList();
	console.log("Correct: ", '024');
}