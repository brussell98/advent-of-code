const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input', { encoding: 'utf8' }).replace(/(\r\n)*$/, '');
console.log('[INPUT]', input);
input = input.split('');

console.log('[PART 1 SOLUTION]', input.reduce((acc, num, i) => num === input[i === input.length - 1 ? 0 : i + 1] ? acc + parseInt(num) : acc, 0));

console.log('[PART 2 SOLUTION]', input.reduce((acc, num, i) => num === input[i > (input.length - 1) / 2 ? i - (input.length / 2) : i + (input.length / 2)] ? acc + parseInt(num) : acc, 0));
