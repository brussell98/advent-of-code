const fs = require('fs');

let input = fs.readFileSync('./input', { encoding: 'utf8' }).replace(/\r|\n/g, '');
console.log('[INPUT]', input);
input = input.split('');

console.log('[OUTPUT]', input.reduce((acc, num, i) => num === input[i === input.length - 1 ? 0 : i + 1] ? acc + parseInt(num) : acc, 0));
