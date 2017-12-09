const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input', { encoding: 'utf8' }).replace(/(\r\n)*$/, '');
console.log('[INPUT]', input);

// Convert input into a 2-dimensional array of numbers
input = input.split('\n').map(row => row.split('\t').map(num => parseInt(num)));

console.log('[SOLUTION 1]', input.reduce((checksum, row) => {
	return checksum + (Math.max(...row) - Math.min(...row))
}, 0));

console.log('[SOLUTION 2]', input.reduce((checksum, row) => {
	for (const num1 of row) {
		for (const num2 of row) {
			if (num1 !== num2 && num1 % num2 === 0)
				return checksum + num1 / num2;
		}
	}
}, 0));
