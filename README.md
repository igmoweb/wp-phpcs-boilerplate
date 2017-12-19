# WordPress + PHPCS Boilerplate

This is a boilerplate to create a new WordPress project with PHPCS and a pre commit hook that will inspect your code in every commit like a psycho.

## Install

Clone this repo with `git clone --recursive https://github.com/igmoweb/wp-phpcs-boilerplate`

If you forgot the `--recursive` param, use the following command
`git submodule update --init --recursive`

After that:
- `npm install`
- `composer install`

This will install `wp-dev-lib` from https://github.com/xwp/wp-dev-lib
After that, Grunt will generate a pre-commit hook that will inspect your code in every commit.

Don't want to lint a commit? Use `git commit --no-verify`
