class Graph {
	constructor(v) {
		this.numVertices = v;
		this.vertices = Array(v);
		this.marked = {};
		this.verticesInit();
	}

	verticesInit() {
		for (let i = 0; i < this.numVertices; i++){
			this.vertices[i] = [];
		}
	}

	clearMark() {
		this.marked = {};
	}

	addDirected(v1, v2) {
		this.vertices[v1].push(v2);
	}

	addUndirected(v1, v2) {
		this.vertices[v1].push(v2);
		this.vertices[v2].push(v1);
	}

	degree(vertex){
		return this.vertices[vertex].length;
	}

	maxDegree() {
		return Math.max(...this.vertices.map((arr, index) => this.degree(index)));
	}

	routeBetweenNodes(vertex, toFind) {

		this.clearMark();
		let stack = [];
		stack.push(vertex);

		while (stack.length > 0){
			let u = stack.pop();
			let adjacents = this.vertices[u];
			for (let n of adjacents){
				if (this.marked[n] === undefined){
					if (n == toFind)
						return true;
					else {
						this.marked[n] = true;
						stack.push(n);
					}
				}
			}
		}

		return false;
	}

	routeBetweenNodesRecursive(vertex, toFind) {

		this.marked[vertex] = true;

		let adjacents = this.vertices[vertex];
		if (adjacents.indexOf(toFind) > -1){
			return true;
		}

		for (let n of adjacents){
			return this.routeBetweenNodes(n, toFind);
		}

		return false;
	}
}

module.exports = { Graph };