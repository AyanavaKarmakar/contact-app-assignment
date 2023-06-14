module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
                'optionalDependencies': false,
                'peerDependencies': false,
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['.eslintrc.js'],
};