module.exports = {
	'extends': 'eslint:recommended',
	'env': {
		'es6': true,
		'node': true
	},
	'rules': {
		// POSSIBLE ERRORS
		// http://eslint.org/docs/rules/#possible-errors
		// 'no-console': 2,
		'no-extra-parens': 0,
		
		// BEST PRACTICES
		// http://eslint.org/docs/rules/#best-practices
		'block-scoped-var': 2,
		'curly': 2,
		'no-self-compare': 2,
		'no-throw-literal': 2,
		'no-void': 2,
		'radix': 2,
		'wrap-iife': 2,

		// STRICT MODE
		// http://eslint.org/docs/rules/#strict-mode
		'strict': 0,

		// VARIABLES
		// http://eslint.org/docs/rules/#variables
		'no-undefined': 2,
		'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
		'no-use-before-define': [2, 'nofunc'],

		// STYLISTIC ISSUES
		// http://eslint.org/docs/rules/#stylistic-issues
		'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
		'camelcase': [2, {'properties': 'never'}],
		'comma-style': 2,
		'consistent-this': [2, 'self'],
		'eol-last': 0,
		'func-names': 0,
		// TODO: add indent rule once app-server tab issues resolved (+ remove from app/web server)
		'key-spacing': 2,
		'keyword-spacing': 2,
		'max-nested-callbacks': [2, 4],
		'no-lonely-if': 2,
		'no-nested-ternary': 2,
		'no-spaced-func': 2,
		'no-underscore-dangle': 0,
		'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
		'semi': 2,
		'space-before-blocks': 2,
		'space-before-function-paren': [2, 'never'],
		'space-infix-ops': 2,
		'space-unary-ops': 2,

		// NODE.JS & COMMONJS
		// http://eslint.org/docs/rules/#nodejs-and-commonjs
		'callback-return': [1, ['callback', 'cb', 'next', 'done']],
		'handle-callback-err': [2, 'err'],
		'no-new-require': 1,
		'no-path-concat': 1,
		'no-sync': 2,

		// ES6
		// http://eslint.org/docs/rules/#ecmascript-6
		'arrow-parens': [1, 'as-needed'],
		'arrow-spacing': [1, { 'before': true, 'after': true }],
		'constructor-super': 1,
		'no-class-assign': 1,
		'no-confusing-arrow': [1, { 'allowParens': true }],
		'no-const-assign': 1,
		'no-dupe-class-members': 1,
		'no-new-symbol': 1,
		'no-this-before-super': 1,
		'no-useless-computed-key': 1,
		'no-useless-rename': 1,
		'no-var': 1,
		'object-shorthand': 1,
		'require-yield': 1,
		'rest-spread-spacing': 1,
		'template-curly-spacing': 1
		// 'prefer-rest-params': 1
		// 'prefer-spread': 1
		// 'prefer-template': 1
	}
};

