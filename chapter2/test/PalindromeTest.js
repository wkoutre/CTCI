const chai = require('chai');
const assert = chai.assert;
const { palindromeList } = require('../PalindromeList');

describe('PalindromeLists', () => {
	it('should return true with a one-letter list', () => {
		var test = makeList('a'.split(''));

		assert.equal(palindromeList(test.head), true);
	});

	it('should return true with a odd-lettered valid palindrome list', () => {
		var test = makeList('glenelg'.split(''));

		assert.equal(palindromeList(test.head), true);
	});

	it('should return true with an even-lettered valid palindrome list', () => {
		var test = makeList('hannah'.split(''));

		assert.equal(palindromeList(test.head), true);
	});

	it('should return false with an even-lettered invalid palindrome list', () => {
		var test = makeList('arthur'.split(''));

		assert.equal(palindromeList(test.head), false);
	});

	it('should return false with an odd-lettered invalid palindrome list', () => {
		var test = makeList('zackary'.split(''));

		assert.equal(palindromeList(test.head), false);
	});

	it('should return an error with an invalid list', () => {

		var test = () => palindromeList('nick');

		assert.throws(test, Error);
	});
});