module.exports = {
	extends: ['eslint:recommended'],
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
		// TODO enable and configure auto lint fixes
		//'array-bracket-spacing': ['error', 'always'],
		'space-before-function-paren': 'off',
		eqeqeq: 'off',
		'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
		'no-useless-escape': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		radix: 'error',
		'dot-notation': 'error',
		'require-atomic-updates': 'off'
	},
	overrides: [
		{
			files: ['test/**/*.js'],
			rules: {
				'no-console': 'off',
				'max-nested-callbacks': [2, 5],
				'new-cap': 'off',
				'no-unused-expressions': 'off',
				'no-sync': 'off'
			}
		}
	]
};
