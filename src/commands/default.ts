import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

import log from 'lib/log';

const handler = () => {
	log.text(figlet.textSync('Fox git cli', {}), chalk.keyword('orange').bold);
	log.text(`\nDocs: ${chalk.blueBright.bold('https://github.com/sergiogc9/fox-git-cli')}\n`);
	shell.exec('foxgit --help');
};

export default handler;
