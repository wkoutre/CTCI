const chai = require('chai');
const assert = chai.assert;
const { StackPlates } = require('../StackPlates');

describe('StackPlates should instantiate correctly', () => {
	it('Should instatiate as a 2D array', () => {
		let stack = new StackPlates(10);

		assert.equal(stack.isEmpty(), true);
	});

	it('Should be an empty 2D array', () => {
		let stack = new StackPlates(10);

		assert.equal(stack.curStack, 0);
	});

	it('Should be an object', () => {
		let stack = new StackPlates(10);

		assert.equal(typeof stack.stack[stack.curStack], 'object');
	});
});

describe('StackPlates should push correctly', () => {
	it('Should push 10 items correctly', () => {
		let stack = new StackPlates(10);
		for (let i = 0; i < 10; i++){
			stack.push(i);
		}

		assert.equal(stack.stack[stack.curStack].length, 10);
		assert.equal(stack.peek(), 9);
	});

	it('Should push 11 items correctly', () => {
		let stack = new StackPlates(10);
		for (let i = 0; i < 11; i++){
			stack.push(i);
		}

		assert.equal(stack.peek(), 10);
		assert.equal(stack.curStack, 1);
	});
});

describe('StackPlates sould pop correctly', () => {
	it('Should pop correctly with 10 items or less', () => {
		let stack = new StackPlates(10);
		for (let i = 0; i < 10; i++){
			stack.push(i);
		}

		assert.equal(stack.pop(), 9);
	});

	it('Should peek and pop correctly with more than 10 items', () => {
		let stack = new StackPlates(10);
		for (let i = 0; i < 11; i++){
			stack.push(i);
		}

		assert.equal(stack.pop(), 10);
		assert.equal(stack.peek(), 9);
		assert.equal(stack.curStack, 0);
	});
});

describe('StackPlates should throw errors correctly', () => {

	it('Should throw an error trying to pop an empty stack', () => {
		let stack = new StackPlates(10);

		assert.throws(stack.pop, Error);
	});
});