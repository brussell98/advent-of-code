const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input', { encoding: 'utf8' })
	.replace(/(\r\n)*$/, '')
	.split('\r\n')
	.map(pw => pw.split(' '));
console.log('[INPUT]', input.length + ' passwords');

console.log('[OUTPUT]', input.filter(pw => !pw.find((el, i) => pw.indexOf(el) !== i || pw.lastIndexOf(el) !== i)).length + ' valid passwords');
