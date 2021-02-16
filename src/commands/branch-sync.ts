import chalk from 'chalk';
import shell from 'shelljs';
import { Argv } from 'yargs';

import { catchError } from 'lib/error';
import { checkGitInstallation } from 'lib/git';
import log from 'lib/log';

interface CommandArgs {
	rebase?: boolean;
}

const name = 'branch-sync';
const description = 'Updates current branch with remote changes.';

const config = (yargs: Argv) => {
	// prettier-ignore
	return yargs
		.usage('gitfox branch-sync [options]')
		.help('help')
		.option('help', {  alias: 'h'})
		.option('rebase', {
			alias: 'r',
			default: false,
			describe: 'Use rebase when syncing',
			type: 'boolean'
		});
};

const handler = async (args: CommandArgs) => {
	catchError(() => {
		checkGitInstallation();

		const currentBranch = shell.exec('git branch --show-current', { silent: true }).trim();
		if (['master', 'develop'].includes(currentBranch)) {
			return log.warn(`You are in a source branch: ${chalk.bold.underline(currentBranch)}. Doing nothing.`);
		}

		const sourceBranch = /^(hotfix|release)(\/|-).*/.test(currentBranch) ? 'master' : 'develop';
		const params = args.rebase ? '--rebase' : '';
		const { code } = shell.exec(`git pull origin ${sourceBranch} ${params}`);
		if (code) throw { code };
	});
};

export default { config, description, handler, name };
