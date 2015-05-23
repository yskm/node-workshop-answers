var inputs = process.argv.slice(2);
var result = inputs
	.map(str => str.substring(0, 1))
	.reduce((previous, current) => previous + current);

console.log(result);