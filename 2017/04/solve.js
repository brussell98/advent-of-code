const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input', { encoding: 'utf8' })
	.replace(/(\r\n)*$/, '')
	.split('\r\n')
	.map(pw => pw.split(' '));
console.log('[INPUT]', input.length + ' passwords');

console.log('[SOLUTION 1]', input.filter(pw => !pw.find((el, i) => pw.indexOf(el) !== i || pw.lastIndexOf(el) !== i)).length + ' valid passwords');

console.log('[SOLUTION 2]', input.filter(pw => {
	// No words with same letters
	return !pw.find((el, i) => {
		const letters = el.split('');

		// Check ever word against word and return true if same
		return pw.find((el2, i2) => {
			// Except same word
			if (i2 == i)
				return false;

			let otherLetters = el2.split('');

			// for each letter in word
			for (const l of letters) {
				// if letter no present then not same
				if (!otherLetters.includes(l))
					return false;
				// otherwise remove it
				otherLetters.splice(otherLetters.indexOf(l), 1);
			}

			// is ever letter present in this word also present in that word
			return otherLetters.length === 0;
		});
	})
}).length + ' valid passwords');
