class TreeNode {
	constructor(data) {
		this.data = data;
		this.parent = null;
		this.left = null;
		this.right = null;
	}
};

class Tree {
	constructor(){
		this.root = null;
	}


	// adds to form a binary search tree (BST)

	add(data){
		let node = new TreeNode(data);
		if (!this.root){
			this.root = node;
		} else {
			let n = this.root;
			let branch;
			while (n){
				branch = data < n.data ? 'left' : 'right';
				if (!n[branch]){				
					break;
				}
				n = n[branch];
			}
			node.parent = n;
			n[branch] = node;
		}
	}


	// add to left of left-most node

	addLeft(data){
		let copyRoot = this.root;
		while (this.root.left){
			this.root = this.root.left;
		}

		this.root.left = new TreeNode(40);
		this.root = copyRoot;
	}

	// add to right of right-mode node
	addRight(data){
		let copyRoot = this.root;
		while (this.root.right){
			this.root = this.root.right;
		}

		this.root.right = new TreeNode(40);
		this.root = copyRoot;
	}

	// check if the tree is balanced; that is, for any node, the difference of its children's heights is <= 1

	balanced(root=this.root) {
		return this._checkHeight(root) != Number.MIN_SAFE_INTEGER;
	}

	// Height is being counted by the number of 'levels' NOT by the number of edges

	_getHeight(treeRoot){
		if (!treeRoot){
			return 0;
		}

		return 1 + Math.max(this._getHeight(treeRoot.left), this._getHeight(treeRoot.right));
	}

	/*

	~~~ HELPER function for this.balanced ~~~

	-- checks height of each node's children
	-- immediately returns Number.MIN_SAFE_INTEGER if (difference in height of a node's children) > 1

	*/

	_checkHeight(treeRoot){
		if (!treeRoot)
			return -1;
		let leftHeight = this._checkHeight(treeRoot.left);
		if (leftHeight === Number.MIN_SAFE_INTEGER)
			return Number.MIN_SAFE_INTEGER

		let rightHeight = this._checkHeight(treeRoot.right);
		if (rightHeight === Number.MIN_SAFE_INTEGER)
			return Number.MIN_SAFE_INTEGER

		let heightDif = Math.abs(leftHeight - rightHeight);
		if (heightDif > 1)
			return Number.MIN_SAFE_INTEGER;
		else
			return Math.max(leftHeight, rightHeight) + 1;
	}

	printTreeInOrder(treeRoot=this.root){
		if(treeRoot) {
			this.printTreeInOrder(treeRoot.left);
			console.log(treeRoot.data);
			this.printTreeInOrder(treeRoot.right);
		}
	}

	printTreePreOrder(treeRoot=this.root){
		if(treeRoot) {
			console.log(treeRoot.data);
			this.printTreePreOrder(treeRoot.left);
			this.printTreePreOrder(treeRoot.right);
		}
	}

	printTreePostOrder(treeRoot=this.root){
		if(treeRoot) {
			this.printTreePostOrder(treeRoot.left);
			this.printTreePostOrder(treeRoot.right);
			console.log(treeRoot.data);
		}
	}
}

module.exports = { Tree, TreeNode }