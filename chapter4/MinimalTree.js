class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
};

isOdd = (arr) => {
	return arr.length % 2 === 0 ? false : true;
}

const minimalTree = (arr) => {
	let midIndex = Math.floor(arr.length / 2);
	let tree = new Node(arr[midIndex]);
	if (isOdd(arr)){

	} else {

	}
};

module.exports = { minimalTree, Node };