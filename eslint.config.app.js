module.exports = {
	extends: ['eslint:recommended'],
	plugins: ['filenames'],
	globals: {
		Promise: true
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	rules: {
		'dot-notation': 'error',
		eqeqeq: 'off',
		'filenames/match-regex': ['error', '^[a-z0-9-]+(-test)?$', true],
		'no-console': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
		'no-useless-escape': 'off',
		radix: 'error',
		'require-atomic-updates': 'off',
		'space-before-function-paren': 'off',
		camelcase: ['error', {properties: 'never', ignoreDestructuring: true}]
	},
	overrides: [
		{
			files: ['test/**/*.js'],
			rules: {
				'no-console': 'off',
				'max-nested-callbacks': [2, 5],
				'new-cap': 'off',
				'no-unused-expressions': 'off',
				'no-sync': 'off',
				camelcase: 'off'
			}
		}
	]
};
