import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

const handler = () => {
	console.log(chalk.keyword('orange').bold(figlet.textSync('Fox git cli', {})));
	console.log(`\nDocs: ${chalk.blueBright.bold('https://github.com/sergiogc9/git-fox-cli')}\n`);
	shell.exec('gitfox --help');
};

export default handler;
