const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input', { encoding: 'utf8' }).replace(/(\r\n)*$/, '');
console.log('[INPUT]', input);

// Convert input into a 2-dimensional array of numbers
input = input.split('\n').map(row => row.split('\t').map(num => parseInt(num)));

console.log('[OUTPUT]', input.reduce((checksum, row) => {
	return checksum + (Math.max(...row) - Math.min(...row))
}, 0));
