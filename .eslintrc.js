module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        jquery: true,
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'func-names': ['error', 'never'],
        'linebreak-style': 0,
        // 'linebreak-style': ['error', 'windows'],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['shades', 'data', 'res'] }],
        'no-bitwise': ['error', { allow: ['<<'] }],
        'max-len': ['error', { code: 120 }],
        'no-console': 'off',
        'import/no-unresolved': [2, { caseSensitive: false }],
    },
};
