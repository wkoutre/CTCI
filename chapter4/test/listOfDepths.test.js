const chai = require('chai');
const assert = chai.assert;
const { Tree } = require('../Tree');
const { listOfDepths } = require('../ListOfDepths');
const { minimalTree } = require('../MinimalTree');

const arrCreator = (n) => {
	let arr = [];
	for (let i = 1; i < n; i++)
		arr.push(i);

	return arr;
}

describe('ListOfDepths', () => {
	it('returns correctly for minTree made with array of 1-9', () => {
		let arr = arrCreator(10);
		let matches = [
						[5],
						[2, 7],
						[1, 3, 6, 8],
						[4, 9]
					];

		let tree = minimalTree(arr, 0, arr.length - 1);
		let depthHash = listOfDepths(tree.root);
		for (let i = 1; i <= Object.keys(depthHash).length; i++){
			assert.deepEqual(depthHash[i].toArr(), matches[i-1]);
		}
	})

	it('returns correctly for minTree made with array of 1-5', () => {
		let arr = arrCreator(6);
		let matches = [
					[3],
					[1, 4],
					[2, 5]
					];

		let tree = minimalTree(arr, 0, arr.length - 1);
		let depthHash = listOfDepths(tree.root);
		for (let i = 1; i <= Object.keys(depthHash).length; i++){
			assert.deepEqual(depthHash[i].toArr(), matches[i-1]);
		}
	})

	it('returns correctly for minTree made with array of 1-3', () => {
		let arr = arrCreator(4);
		let matches = [
					[2],
					[1, 3]
					];

		let tree = minimalTree(arr, 0, arr.length - 1);
		let depthHash = listOfDepths(tree.root);
		for (let i = 1; i <= Object.keys(depthHash).length; i++){
			assert.deepEqual(depthHash[i].toArr(), matches[i-1]);
		}
	})
})