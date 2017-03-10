/*
** Builds order of project completion
** @param {Array} 		projects
** @param {2D Array} 	dependencies
** @return {Array} 		build
*/

// Relationships = graphs;

const { ProjectGraph } = require('./ProjectGraph');

const buildOrder = (projects, dependencies) => {
	let projectBank = [...projects];
	let graph = new ProjectGraph();
	
	// find non-dependent projects

	for (let p of projects){
		graph.createNode(p);
	}

	for (let a of dependencies){
		let index = projectBank.indexOf(a[1]);
		if (index > -1)
			projectBank.splice(index, 1);
	}

	// if all projects are dependent

	if (projectBank.length === 0)
		throw new Error('No build order can be created: all projects have dependencies.');

	// establishing Graph with known n of vertices

	for (let a of dependencies){
		graph.addDirected(a[0], a[1]);
	}

	let graphKeys = Object.keys(graph.vertices);
	let i = 0;
	while (i < projectBank.length){ // keep this in mind
		let processing = projectBank[i];
		
		if (!processing){
			return null;
		}

		let outgoingArr = graph.vertices[processing].outgoing;
		for (let v of outgoingArr){
			graph.vertices[v].numDependencies--;
			if (graph.vertices[v].numDependencies === 0){
				projectBank.push(v);
			}
		}
		i++;
	}

	return projectBank.length === projects.length ? projectBank : null;

}

module.exports = { buildOrder }

// e, f, b, d, a, c