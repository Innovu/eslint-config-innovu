module.exports = {
	extends: ['eslint:recommended', 'plugin:ember/recommended'],
	globals: {
		Promise: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		allowImportExportEverywhere: true
	},
	plugins: ['ember'],
	env: {
		es6: true,
		browser: true,
		node: true,
		embertest: true,
		mocha: true
	},
	rules: {
		'space-before-function-paren': [
			'error',
			{
				asyncArrow: 'always',
				anonymous: 'never',
				named: 'never'
			}
		],
		'arrow-parens': ['error', 'as-needed'],
		'callback-return': ['error', ['done']],
		eqeqeq: 'off',
		'no-console': 'error',
		'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
		'no-useless-escape': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		radix: 'error',
		'dot-notation': 'error'
	},
	overrides: [
		// test files
		{
			files: ['tests/**/*.js'],
			// exempt legacy rating model
			excludedFiles: ['tests/dummy/**/*.js'],
			globals: {
				server: true,
				should: true
			}
		},
		// enable async/await only for tests
		{
			files: ['app/**/*.js', 'workers/**/*.js'],
			excludedFiles: ['app/diagnostic.js'],
			plugins: ['disable-features'],
			rules: {
				'disable-features/disable-async-await': 'error'
			}
		}
	]
};
