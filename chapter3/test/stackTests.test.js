const chai = require('chai');
const assert = chai.assert;
const { Stack } = require('../Stack');

describe('stack should work properly', () => {
	it('should instantiate with an empty array object', () => {
		let stack = new Stack();

		assert.equal(stack.isEmpty(), true);
	});

	it('should push correctly', () => {
		let stack = new Stack();
		stack.push('a');
		stack.push('b');

		assert.equal(stack.peek(), 'b');
	});

	it('should pop correctly', () => {
		let stack = new Stack();
		stack.push('a');
		stack.push('b');

		assert.equal(stack.pop(), 'b');
		assert.equal(stack.pop(), 'a');
	});

	it('should peek correctly', () => {
		let stack = new Stack();
		stack.push('a');
		stack.push('b');

		assert.equal(stack.peek(), 'b');
		assert.equal(stack.stack.length, 2);
	});

	it('should isEmpty correctly', () => {
		let stack = new Stack();
		stack.push('a');
		stack.push('b');

		assert.equal(stack.isEmpty(), false);

		stack.pop();
		stack.pop();

		assert.equal(stack.isEmpty(), true);
	});
});