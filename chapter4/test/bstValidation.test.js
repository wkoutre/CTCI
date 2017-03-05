const chai = require('chai');
const assert = chai.assert;
const { Tree, TreeNode } = require('../Tree');
const { minimalTree } = require('../MinimalTree');
const { bstValidation } = require('../bstValidation');

describe('BST Validation', () => {
	it('Validates with a 5-number BST', () => {
		let arr = '12345'.split('').map(Number);
		let tree = minimalTree(arr).node;

		assert.equal(bstValidation(tree), true);
	});

	it('Returns false with a 6-number non-search binary tree failing on left', () => {
		
		let tree = new Tree();

		tree.add(1);
		tree.add(-5);
		tree.add(-2);
		tree.add(100);

		// tree.printTreePreOrder();
		tree.addLeft(40);
		assert.equal(bstValidation(tree.root), false);
	});

	it('Returns false with a 6-number non-search binary tree failing on right', () => {
		
		let tree = new Tree();

		tree.add(1);
		tree.add(-5);
		tree.add(-2);
		tree.add(100);

		// tree.printTreePreOrder();
		tree.addRight(40);
		assert.equal(bstValidation(tree.root), false);
	});

	it('Returns false with a 6-number non-search binary tree failing on right-most\'s left', () => {
		
		let tree = new Tree();

		tree.add(1);
		tree.add(-5);
		tree.add(-2);
		tree.add(100);

		let copyRoot = tree.root;
		while (tree.root.right){
			tree.root = tree.root.right;
		}

		tree.root.left = new TreeNode(10);
		tree.root = copyRoot;

		// tree.printTreePreOrder();
		assert.equal(bstValidation(tree.root), false);
	});
})
