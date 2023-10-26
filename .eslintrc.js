module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'prettier/prettier',
        'plugin:storybook/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'no-console': [
            'error',
            {
                allow: ['debug', 'warn', 'error'],
            },
        ],
        'import/no-named-as-default': 0,
        'no-param-reassign': 'off', // 파라미터는 지역변수로 받아서 쓰라는 rule
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': ['warn'], // props로 받은 것 바로 props로 넘기기 허용
        'react/no-unescaped-entities': 0,
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
    },
};
