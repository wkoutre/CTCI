// find the next visited node in an in-order traversal given a single node with a parent property

const successor = (treeNode) => {

	if (!treeNode)
		return null;
	if (treeNode.right){
		treeNode = treeNode.right;
		while (treeNode.left){
			treeNode = treeNode.left;
		}
		return treeNode;
	} else {
		while (treeNode.parent && treeNode !== treeNode.parent.left)
			treeNode = treeNode.parent
		return treeNode.parent ? treeNode.parent : null;
	}
}

module.exports = { successor };