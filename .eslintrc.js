module.exports = {
    extends: [
        'ebay',
        'plugin:jest/recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false
    },
    plugins: ['jest'],
    env: {
        browser: true,
        node: true,
        'jest/globals': true
    },
    rules: {
        'lines-between-class-members': ['error', 'always'],
        'no-multiple-empty-lines': [
            'error',
            { 'max': 1, 'maxBOF': 0, 'maxEOF': 1 }
        ],
        'object-shorthand': ['error', 'always'],
        'one-var': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'if' },
            { blankLine: 'always', prev: 'if', next: '*' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'try' },
            { blankLine: 'always', prev: 'try', next: '*' }
        ]
    }
};
