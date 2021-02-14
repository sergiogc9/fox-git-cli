import chalk from 'chalk';
import shell from 'shelljs';

/**
 * Throw example without message:
 * throw { code: 10 };
 *
 * Throw example with message:
 * throw { code: 1, message: 'Some error ocurred' };
 */
const catchError = (fn: (...args: unknown[]) => unknown) => {
	try {
		fn();
	} catch (e) {
		if (e.message) console.error(chalk.redBright(`⚠️ ${e.message}`));
		shell.exit(e.code || 1);
	}
};

export { catchError };
