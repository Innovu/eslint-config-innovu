module.exports = {
    extends: ['eslint:recommended'],
    globals: {
        Promise: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
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
        eqeqeq: 'error',
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'no-useless-escape': 'off',
        'no-mixed-spaces-and-tabs': 'off'
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
}