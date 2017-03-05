const chai = require('chai');
const assert = chai.assert;
const { minimalTree } = require('../MinimalTree');
const { Tree } = require('../Tree');


const arrCreator = (n) => {
	let arr = [];
	for (let i = 1; i < n; i++)
		arr.push(i);

	return arr;
}

describe('BalancedTree', () => {
	it('returns true for balanced binary tree', () => {

		let arr = arrCreator(10);
		let tree = minimalTree(arr, 0, arr.length - 1);

		assert.equal(tree.balanced(), true);
	})

	it('returns true for unbalanced binary tree', () => {

		let arr = arrCreator(10);
		let tree = new Tree();
		for (let i of arr){
			tree.add(i);
		}

		assert.equal(tree.balanced(), false);
	})
});