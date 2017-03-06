const chai = require('chai');
const assert = chai.assert;
const { minimalTree } = require('../MinimalTree');
const { successor } = require('../successor');

describe('Successor', () => {
	it('returns 9 for 9-number minimal-height BST with data=8 passed as node', () => {
		let arr = '123456789'.split('').map(Number);
		let bst = minimalTree(arr);

		for (let i = 0; i < 2; i++){
			bst.root = bst.root.right; // bst.root is set to 8; 9 should be the successor
		}

		assert.equal(successor(bst.root).data, 9);
	})

	it('returns null for 9-number minimal-height BST with data=9 passed as node', () => {
		let arr = '123456789'.split('').map(Number);
		let bst = minimalTree(arr);

		for (let i = 0; i < 3; i++){
			bst.root = bst.root.right; // bst.root is set to 8; 9 should be the successor
		}

		assert.equal(successor(bst.root), null);
	})

	it('returns 5 for 9-number minimal-height BST with data=4 passed as node', () => {
		let arr = '123456789'.split('').map(Number);
		let bst = minimalTree(arr);

		let movingTreeNode = bst.goLeft(1, bst);
		movingTreeNode = movingTreeNode.goRight(2, movingTreeNode);

		assert.equal(successor(movingTreeNode.root).data, 5);
	})
})