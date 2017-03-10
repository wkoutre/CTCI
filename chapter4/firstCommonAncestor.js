/*
* Finds first common ancestor of two nodes in a Binary Tree (not necessarily a BST)
* @param {Tree} 		root
* @param {TreeNode} 	n1
* @param {TreeNode} 	n2
* @return {TreeNode} 	ret;
*/

const getHeight = (treeRoot, nodeStop) => {
	if (!treeRoot){
		return Number.MIN_SAFE_INTEGER;
	}

	if (treeRoot.data === nodeStop){
		return 0;
	}

	return 1 + Math.max(getHeight(treeRoot.left, nodeStop), getHeight(treeRoot.right, nodeStop));
}

const findAncestor = (root, n1, n2) => {
	// console.log(root, n1, n2);
	if (root === null)
		return null;
	if (root.data === n1 && root.data === n2)
		return root.data;

	let left = findAncestor(root.left, n1, n2);
	if (left !== null && left !== n1 && left !== n2){
		return left;
	}

	let right = findAncestor(root.right, n1, n2);
	if (right !== null && right !== n1 && right !== n2){
		return right;
	}

	if (left !== null && right !== null){
		return root.data;
	} else if (root.data === n1 || root.data === n2){
		return root.data;
	} else {
		return left === null ? right : left;
	}
 }

const firstCommonAncestor = (root, n1, n2) => {
	let n1height = getHeight(root, n1);
	let n2height = getHeight(root, n2);

	// console.log(n1height, n2height);
	if (n2height < -90071992547409 && n1height < -90071992547409)
		return null;
	if (n1height < -90071992547409)
		return n2;
	if (n2height < -90071992547409)
		return n1;

	return findAncestor(root, n1, n2);
};

module.exports = { firstCommonAncestor };