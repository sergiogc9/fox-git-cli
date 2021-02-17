# fox-git-cli

![](https://badgen.net/npm/v/fox-git-cli?icon=npm&label)
![](https://github.com/sergiogc9/fox-git-cli/workflows/Github%20Pipeline/badge.svg?branch=master)

A git command line tool to improve the git workflow.

⚠️ _DEPRECATED:_ this cli tool has been merged with other cli tools in [fox-awesome-cli](https://www.npmjs.com/package/fox-awesome-cli). Use that one instead.

- [fox-git-cli](#fox-git-cli)
  - [About the cli](#about-the-cli)
  - [Installation](#installation)
  - [Usage](#usage)
    - [help](#help)
    - [`branch-sync`](#branch-sync)

## About the cli

It works only in a basic **gitflow** workflow with the following branches:

- `master`
- `hotfix/XXX` or `hotfix-XXX`
- `release/XXX` or `release-XXX`
- `develop`
- `feature/XXX` or `feature-XXX`

\* In the future this will be configurable.

This cli is part of a set of personal cli tools named as [fox-awesome-cli](https://github.com/sergiogc9/fox-awesome-cli) also developed by myself.

## Installation

**Prerequisites**: NodeJS (>=14.x tested only) and git installed.

You can install it globally:

`yarn global add fox-git-cli` or `npm install -g fox-git-cli`

Or install locally:

`yarn add fox-git-cli` or `npm install fox-git-cli`

## Usage

This cli tool can be used with some aliases: `foxgit`, `foxg`, `fgit` and `fg`. You can choose the one you prefer.

The usage is:

`foxgit <command> [options]`

#### help

You can see some information and the available commands using the help option or not using any command:

`foxgit` or `foxgit -h`

#### `branch-sync`

Synchronizes the current branch with the remote source branch. By default **hotfix** and **release** branches are synchronized with **master** branch and **feature** branches are synchronized with **develop**.

If you are already in a source branch (i.e. master or develop) this command does nothing.

Basically this command performs:

- Pulls the most recent changes from source branch.
- Tries to merge these changes into the current branch. You can force doing a rebase using the `--rebase` parameter.

For further options docs:

`foxgit branch-sync -h`
