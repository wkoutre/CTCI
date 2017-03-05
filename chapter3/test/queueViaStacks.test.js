const chai = require('chai');
const assert = chai.assert;
const { Queue } = require('../QueueViaStacks');

describe('QueueViaStacks', () => {
	it('Should add to the queue correctly', () => {
		let q = new Queue();

		q.add(1);
		q.add(2);

		assert.equal(q.peek(), 1);
	});

	it('Should remove from queue correctly', () => {
		let q = new Queue();

		q.add(1);
		q.add(2);

		assert.equal(q.remove(), 1);
		assert.equal(q.peek(), 2);
		assert.equal(q.remove(), 2);
		assert.equal(q.peek(), undefined);
		assert.throw(q.remove, Error);
	});
})