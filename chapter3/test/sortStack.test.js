const chai = require('chai');
const assert = chai.assert;
const { sortStack } = require('../SortStack');
const { Stack } = require('../Stack');

describe('sortStack sorts correctly', () => {
	it('Should sort items properly', () => {
		let arr = [5, 3, 1, 10, 9];
		let stack = new Stack();
		for (n of arr)
			stack.push(n);

		stack = sortStack(stack);

		assert.deepEqual(stack.stack, [10, 9, 5, 3, 1]);
	});

	it('Should handle empty array', () => {
		let arr = [5, 3, 1, 10, 9];
		let stack = new Stack();
		for (n of arr)
			stack.push(n);

		stack = sortStack(stack);

		assert.deepEqual(stack.stack, [10, 9, 5, 3, 1]);
	});

it('Should sort items with duplicates properly', () => {
		let arr = [5, 3, 1, 5, 10, 9, 1, 5];
		let stack = new Stack();
		for (n of arr)
			stack.push(n);

		stack = sortStack(stack);

		assert.deepEqual(stack.stack, [10, 9, 5, 5, 5, 3, 1, 1]);
	});

});