var assert = require('chai').assert
var hello = require('../src');
foo = hello();

console.log('-----foo var : '+foo)

describe('String Test', function() {
	it('should be a valid string', function() {
		assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
		assert.equal(foo, 'bar', 'foo equal `bar`');
		assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
	});
});