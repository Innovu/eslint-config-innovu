module.exports = {
	'extends': 'eslint:recommended',
	'env': {
		'es6': true,
		'node': true
	},
	'rules': {
		'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
		'block-scoped-var': 'error',
		'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
		'callback-return': [ 'error', [ 'callback', 'cb', 'next', 'done' ] ],
		'camelcase': [ 'error', {'properties': 'never'} ],
		'comma-dangle': [ 'error', 'never' ],
		'comma-style': 'error',
		'consistent-this': [ 'error', 'self' ],
		'constructor-super': 'error',
		'curly': 'error',
		'eol-last': 'off',
		'func-names': 'off',
		'handle-callback-err': [ 'error', 'err' ],
		'indent': [ 'error', 'tab', { 'SwitchCase': 1 } ],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'max-nested-callbacks': [ 'error', 4 ],
		'no-class-assign': 'error',
		'no-confusing-arrow': [ 'error', { 'allowParens': true } ],
		'no-console': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-extra-parens': 'off',
		'no-lonely-if': 'error',
		'no-nested-ternary': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'error',
		'no-path-concat': 'error',
		'no-self-compare': 'error',
		'no-spaced-func': 'error',
		'no-sync': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': 'off',
		'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'none' } ],
		'no-use-before-define': [ 'error', 'nofunc' ],
		'no-useless-computed-key': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'object-shorthand': 'error',
		'prefer-template': 'off',
		'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true } ],
		'radix': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'semi': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', 'never' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'strict': 'off',
		'template-curly-spacing': 'error',
		'wrap-iife': 'error'
	}
};

