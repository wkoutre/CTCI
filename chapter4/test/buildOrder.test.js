const chai = require('chai');
const assert = chai.assert;
const { buildOrder } = require('../buildOrder');

describe('buildOrder Functionality', () => {
	it('throws an Error when there is no possible build order', () => {
		let projects = 'abcdef'.split('');
		let dependencies = 'ad fb bf bd fa dc'.split(' ').map(s => s.split(''));

		let fn = () => {
			return buildOrder(projects, dependencies);
		}

		assert.equal(fn(), null);
	});

	it('returns a correct build order for the book\'s sample input', () => {
		let projects = 'abcdef'.split('');
		let dependencies = 'ad fb bd bd fa dc'.split(' ').map(s => s.split(''));

		// console.log(buildOrder(projects, dependencies));
		assert.deepEqual(buildOrder(projects, dependencies), 'efbadc'.split(''));
	});

	it('returns a correct build order for the custom input', () => {
		let projects = 'abcde'.split('');
		let dependencies = 'ab ad ea dc ed ec'.split(' ').map(s => s.split(''));

		// console.log(buildOrder(projects, dependencies));
		assert.deepEqual(buildOrder(projects, dependencies), 'eabdc'.split(''));
	});
});