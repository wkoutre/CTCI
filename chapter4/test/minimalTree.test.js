const chai = require('chai');
const assert = chai.assert;
const { minimalTree } = require('../MinimalTree');

describe('Tree is created correctly', () => {
	it('returns a tree with height 4 with 9 nodes', () => {
		let arr = '123456789'.split('').map(Number);
		let minTree = minimalTree(arr, 0, arr.length);

		assert.equal(minTree._getHeight(minTree.root), 4);
	})

	it('returns a tree with height 3 with 5 nodes', () => {
		arr = '12345'.split('').map(Number);
		minTree = minimalTree(arr, 0, arr.length);
		assert.equal(minTree._getHeight(minTree.root), 3);
	})

	it('returns a tree with height 2 with 3 nodes', () => {
		arr = '123'.split('').map(Number);
		minTree = minimalTree(arr, 1, arr.length);
		assert.equal(minTree._getHeight(minTree.root), 2);
	})

	it('returns a tree with height 2 with 2 nodes', () => {
		arr = '12'.split('').map(Number);
		minTree = minimalTree(arr, 0, arr.length);
		assert.equal(minTree._getHeight(minTree.root), 2);
	})

	it('returns a tree with height 1 with 1 node', () => {
		arr = '1'.split('').map(Number);
		minTree = minimalTree(arr, 0, arr.length);
		assert.equal(minTree._getHeight(minTree.root), 1);
	})

	it('returns a tree with height 0 with 0 nodes', () => {
		arr = ''.split('').map(Number);
		minTree = minimalTree(arr, 0, arr.length);
		assert.equal(minTree._getHeight(minTree.root), 0);
	})
})