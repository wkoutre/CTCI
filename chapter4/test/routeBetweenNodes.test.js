const chai = require('chai');
const assert = chai.assert;
// const { RouteBetweenNodes } = require('../RouteBetweenNodes');
const { Graph } = require('../Graph');

const makeGraph = () => {
	let graph = new Graph(5);

	graph.addDirected(0, 2);
	graph.addDirected(0, 3);
	graph.addDirected(1, 4);
	graph.addDirected(2, 1);
	graph.addDirected(2, 3);
	graph.addDirected(2, 4);
	graph.addDirected(3, 1);

	return graph;
}

describe('RouteBetweenNodes', () => {
	it('Should create the graph correctly', () => {
		let graph = makeGraph();

		assert.deepEqual(graph.vertices[3], [1]);
		assert.deepEqual(graph.vertices[2], [1, 3, 4]);
		assert.deepEqual(graph.vertices[4], []);
	});

	it('Should return TRUE when there IS a route', () => {
		let graph = makeGraph();

		assert.equal(graph.routeBetweenNodes(0, 3), true);
		assert.equal(graph.routeBetweenNodes(0, 2), true);
		assert.equal(graph.routeBetweenNodes(0, 1), true);
		assert.equal(graph.routeBetweenNodes(0, 4), true);
		assert.equal(graph.routeBetweenNodes(1, 4), true);
		assert.equal(graph.routeBetweenNodes(1, 3), false);
		assert.equal(graph.routeBetweenNodes(1, 2), false);
		assert.equal(graph.routeBetweenNodes(1, 0), false);
		assert.equal(graph.routeBetweenNodes(2, 3), true);
		assert.equal(graph.routeBetweenNodes(2, 0), false);
		assert.equal(graph.routeBetweenNodes(2, 1), true);
		assert.equal(graph.routeBetweenNodes(2, 4), true);
		assert.equal(graph.routeBetweenNodes(3, 1), true);
		assert.equal(graph.routeBetweenNodes(3, 4), true);
		assert.equal(graph.routeBetweenNodes(3, 0), false);
		assert.equal(graph.routeBetweenNodes(3, 2), false);
		assert.equal(graph.routeBetweenNodes(4, 0), false);
		assert.equal(graph.routeBetweenNodes(4, 1), false);
		assert.equal(graph.routeBetweenNodes(4, 2), false);
		assert.equal(graph.routeBetweenNodes(4, 3), false);
	});

	it('Should return FALSE when there\'s NO route', () => {
		let graph = makeGraph();

		assert.equal(graph.routeBetweenNodes(1, 3), false);
		assert.equal(graph.routeBetweenNodes(1, 2), false);
		assert.equal(graph.routeBetweenNodes(1, 0), false);
		assert.equal(graph.routeBetweenNodes(2, 0), false);
		assert.equal(graph.routeBetweenNodes(3, 0), false);
		assert.equal(graph.routeBetweenNodes(3, 2), false);
		assert.equal(graph.routeBetweenNodes(4, 0), false);
		assert.equal(graph.routeBetweenNodes(4, 1), false);
		assert.equal(graph.routeBetweenNodes(4, 2), false);
		assert.equal(graph.routeBetweenNodes(4, 3), false);
	});
})