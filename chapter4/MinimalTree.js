const { Tree } = require('./Tree');

const minimalTree = (arr, start=0, end=arr.length) => {
	let tree = new Tree();

	if (arr && arr.length){
		add(tree, arr, 0, arr.length - 1);
	}
	return tree;
}

const add = (tree, arr, start, end) => {
	if (start === end)
		tree.add(arr[start]);
	else if (start < end){
		let mid = Math.floor((start + end) / 2);
		tree.add(arr[mid]);
		add(tree, arr, start, mid - 1);
		add(tree, arr, mid + 1, end);
	}
};

module.exports = { minimalTree };