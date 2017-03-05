const chai = require('chai');
const assert = chai.assert;
const { Stack } = require('../Stack');

// describe('Stack should throw error if it is empty.', () => {
// 	it('Should throw error', () => {
// 		let stack = new Stack();
// 		let test = () => stack.min();

// 		assert.throw(test, Error);
// 	});
// });

describe('Stack should keep track of min', () => {
	it('Should return push\'s data after one push', () => {
		let stack = new Stack();
		stack.push(100);

		assert.equal(stack.mini(), 100);
	});

	it('Should keep track of the min after multiple pushes.', () => {
		let stack = new Stack();
		stack.push(100);
		stack.push(100);
		stack.push(105);
		stack.push(99);

		assert.equal(stack.mini(), 99);
	});

	it('Should keep track of the min after multiple pushes.', () => {
		let stack = new Stack();
		stack.push(100);
		stack.push(100);
		stack.push(105);
		stack.push(99);
		stack.push(8);

		assert.equal(stack.mini(), 8);
		stack.pop();
		assert.equal(stack.mini(), 99);

		stack.pop();
		assert.equal(stack.mini(), 100);
		stack.pop();
		assert.equal(stack.mini(), 100);
		stack.pop();
		assert.equal(stack.mini(), 100);
	});
});