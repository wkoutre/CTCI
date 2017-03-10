const chai = require('chai');
const assert = chai.assert;
const { minimalTree } = require('../MinimalTree');
const { firstCommonAncestor } = require('../firstCommonAncestor');

describe('First Common Ancestor', () => {
	it('Should return 5 for balanced BST made from 1-9 with 1 and 9 passed as nodes', () => {
		let arr = '123456789'.split('').map(Number);
		let bst = minimalTree(arr);

		assert.equal(firstCommonAncestor(bst.root, 1, 9), 5);
	})
})