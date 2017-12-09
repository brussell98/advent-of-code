if (process.argv.length < 3) {
	console.info('Provide a day to solve for. Example: node ./runner.js 2');
	process.exit(1);
}

const day = process.argv.slice(2)[0].padStart(2, '0');

const exec = require('child_process').exec;

exec(`node ${__dirname}\\2017\\${day}\\solve.js`, (error, stdout, stderr) => {
	if (error)
		return console.error(error);

	if (stderr)
		console.error('Error: ' + stderr);

	console.log(stdout);
});
