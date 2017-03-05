// Validates whether or not a tree is a BST

const bstValidation = (node, min=Number.MAX_SAFE_INTEGER, max=Number.MIN_SAFE_INTEGER) => {
	if (!node){
		return true;
	}
	if (node.data > min)
		return false;
	if (node.data < max)
		return false;

	return bstValidation(node.left, min, node.data);
	return bstValidation(node.right, node.data, max);
}

module.exports = { bstValidation }