const { Tree } = require('./Tree');
const { List } = require('../chapter2/LinkedLists')

const listOfDepths = (treeRoot, hash={}, level=1) => {
	if (!treeRoot)
		return null;
	if (hash[level] === undefined){
		hash[level] = new List(treeRoot.data);
	} else {
		hash[level].pushBack(treeRoot.data);
	}

	listOfDepths(treeRoot.left, hash, level + 1);
	listOfDepths(treeRoot.right, hash, level + 1);

	return hash;
}

module.exports = { listOfDepths }