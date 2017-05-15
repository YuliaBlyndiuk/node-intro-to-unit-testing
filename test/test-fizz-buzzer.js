const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('function', function() {

	//testing the normal case
	const normalCases = [
		{num: 15, expected: 'fizz-buzz'},
		{num: 5, expected: 'buzz'}, 
		{num: 3, expected: 'fizz'}
	]

	//for each input (num) fizzByzzer should produce the expected value
	normalCases.forEach(function(input){
		const answer = fizzBuzzer(input.num)
		answer.should.equal(input.expected);
	});
});

it('should raise an error if argument is not a number', function() {
	//a few bad inputs
	const badInputs = [
	['a'],
	['b']
	];

	//prove that an error is being raised
	badInputs.forEach(function(input){
		(function() {
			fizzBuzzer(input[0], input[1])
		}).should.throw(Error);
	});
});