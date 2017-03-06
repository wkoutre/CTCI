class ProjectGraph {
	constructor() {
		this.vertices = {};
		this.marked = {};
	}

	clearMarks() {
		this.marked = {};
	}

	createNode(data){
		if (!this.vertices[data]){
			this.vertices[data] = {
				outgoing: [],
				numDependencies: 0
			};
		}
	}

	addDirected(v1, v2) {
		if (this.vertices[v1].outgoing.indexOf(v2) === -1){
			this.vertices[v1].outgoing.push(v2);
			this.vertices[v2].numDependencies++;
		}
	}

	addUndirected(v1, v2) {
		if (!this.vertices[v1]){
			this.vertices[v1] = [];
		}
		if (!this.vertices[v2]){
			this.vertices[v2] = [];
		}

		if (this.vertices[v1].indexOf(v2) === -1)
			this.vertices[v1].push(v2);
		if (this.vertices[v2].indexOf(v1) === -1)
			this.vertices[v2].push(v1);
	}

	degree(vertex){
		return this.vertices[vertex].length;
	}

	maxDegree() {
		return Math.max(...this.vertices.map((arr, index) => this.degree(index)));
	}

	routeBetweenNodes(vertex, toFind) {

		this.clearMarks();
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
}

module.exports = { ProjectGraph };