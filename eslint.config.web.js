module.exports = {
	globals: {
		Promise: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		allowImportExportEverywhere: true,
    ecmaFeatures: {
      legacyDecorators: true
    }
	},
	plugins: ['ember'],
	env: {
		es6: true,
		browser: true,
		node: true,
		embertest: true,
		mocha: true
	},
	extends: ['eslint:recommended', 'plugin:ember/recommended'],
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
		'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
		'no-useless-escape': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		radix: 'error',
		'dot-notation': 'error'
	},
	overrides: [
		// node files
		{
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    },
		// test files
		{
			files: ['tests/**/*.js'],
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
