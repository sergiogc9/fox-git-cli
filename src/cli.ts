import yargs from 'yargs';

import defaultHandler from 'commands/default';
import branchSync from 'commands/branch-sync';
import pkg from '../package.json';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
	.version(pkg.version)
	.command(
		'$0',
		'',
		y =>
			y
				.usage('Usage: foxgit <command> [options]')
				.usage('Usage: foxg <command> [options]')
				.usage('Usage: fgit <command> [options]')
				.usage('Usage: fg <command> [options]'),
		defaultHandler
	)
	.command(branchSync.name, branchSync.description, branchSync.config, branchSync.handler).argv;
