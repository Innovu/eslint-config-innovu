module.exports = {
    extends: ['eslint:recommended'],
    globals: {
        Promise: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
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
        // TODO enable and configure auto lint fixes
        //'array-bracket-spacing': ['error', 'always'],
        'space-before-function-paren': 'off',
        eqeqeq: 'off',
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'no-useless-escape': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'ember/avoid-leaking-state-in-ember-objects': 'error',
        'ember/closure-actions': 'error',
        'ember/jquery-ember-run': 'error',
        'ember/new-module-imports': 'error',
        'ember/no-attrs-in-components': 'error',
        'ember/no-attrs-snapshot': 'error',
        'ember/no-capital-letters-in-routes': 'error',
        'ember/no-duplicate-dependent-keys': 'error',
        'ember/no-function-prototype-extensions': 'error',
        'ember/no-global-jquery': 'error',
        'ember/no-old-shims': 'error',
        'ember/no-on-calls-in-components': 'error',
        'ember/no-side-effects': 'error',
        'ember/require-super-in-init': 'error',
        'ember/routes-segments-snake-case': 'error'
    },
    overrides: [
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
}
