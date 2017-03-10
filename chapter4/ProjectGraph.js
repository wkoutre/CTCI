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
}

module.exports = { ProjectGraph };