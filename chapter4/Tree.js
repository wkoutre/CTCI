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

	// left() {
	// 	this.root = this.root.left;
	// }

	// left() {
	// 	this.root = this.root.right;
	// }

	// Height is being counted by the number of 'levels' NOT by the number of edges

	_getHeight(tree) {
		if (!tree){
			return 0;
		}

		return 1 + Math.max(this._getHeight(tree.left), this._getHeight(tree.right));
	}

	printTree(tree){
		if (!tree)
			console.log('DONE');
		this.printTree(tree.left);
		console.log(tree.data);
		this.printTree(tree.right);
	}
}

module.exports = { Tree }