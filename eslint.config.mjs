import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
    // Global ignores
    {
        ignores: [
            '**/*.spec.ts',
            '**/*.html',
            '**/*.css',
            '**/*.scss',
            '**/*.md',
            '**/*.yml',
            'node_modules/**',
            'e2e/**',
            'build/**',
            'dist/**'
        ]
    },

    // Base JavaScript/TypeScript configuration
    js.configs.recommended,

    // TypeScript files configuration
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                project: './tsconfig.eslint.json',
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            '@angular-eslint': angular,
            prettier: prettier,
            'simple-import-sort': simpleImportSort
        },
        rules: {
            // Extend recommended rules
            ...tseslint.configs.recommended.rules,
            ...angular.configs.recommended.rules,

            // Angular-specific rules
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case'
                }
            ],
            '@angular-eslint/prefer-on-push-component-change-detection': ['error'],

            // TypeScript rules
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/class-literal-property-style': 'error',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-type-assertions': 'error',
            '@typescript-eslint/consistent-type-definitions': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': [
                'off',
                {
                    accessibility: 'explicit'
                }
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/member-delimiter-style': [
                'off',
                {
                    multiline: {
                        delimiter: 'none',
                        requireLast: true
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false
                    }
                }
            ],
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-inferrable-types': [
                'error',
                {
                    ignoreParameters: true
                }
            ],
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-parameter-properties': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-namespace-keyword': 'error',
            '@typescript-eslint/semi': ['off', null],
            '@typescript-eslint/type-annotation-spacing': 'off',
            '@typescript-eslint/unified-signatures': 'error',

            // General rules
            'no-array-constructor': 'off',
            'no-loss-of-precision': 'off',
            'no-unused-vars': 'off',
            'no-console': [
                'error',
                {
                    allow: [
                        'info',
                        'dirxml',
                        'warn',
                        'error',
                        'dir',
                        'timeLog',
                        'assert',
                        'clear',
                        'count',
                        'countReset',
                        'group',
                        'groupCollapsed',
                        'groupEnd',
                        'table',
                        'Console',
                        'markTimeline',
                        'profile',
                        'profileEnd',
                        'timeline',
                        'timelineEnd',
                        'timeStamp',
                        'context'
                    ]
                }
            ],
            'arrow-body-style': 'off',
            'arrow-parens': 'off',
            'brace-style': ['off', 'off'],
            'comma-dangle': 'off',
            complexity: 'off',
            'constructor-super': 'error',
            curly: 'error',
            'dot-notation': 'error',
            'eol-last': 'off',
            eqeqeq: ['error', 'smart'],
            'guard-for-in': 'error',
            'id-blacklist': 'off',
            'id-match': 'off',
            indent: 'off',
            'jsdoc/check-alignment': 'off',
            'jsdoc/check-indentation': 'off',
            'jsdoc/newline-after-description': 'off',
            'linebreak-style': 'off',
            'max-classes-per-file': 'off',
            'max-len': 'off',
            'new-parens': 'off',
            'newline-per-chained-call': 'off',
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-cond-assign': 'error',
            'no-debugger': 'error',
            'no-empty': 'off',
            'no-eval': 'error',
            'no-extra-semi': 'off',
            'no-fallthrough': 'error',
            'no-invalid-this': 'off',
            'no-irregular-whitespace': 'off',
            'no-multiple-empty-lines': 'off',
            'no-new-wrappers': 'error',
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: 'rxjs/Rx',
                            message: "Please import directly from 'rxjs' instead"
                        }
                    ]
                }
            ],
            'no-shadow': [
                'off',
                {
                    hoist: 'all'
                }
            ],
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'off',
            'no-undef-init': 'error',
            'no-underscore-dangle': 'off',
            'no-unsafe-finally': 'error',
            'no-unused-labels': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'quote-props': 'off',
            quotes: 'off',
            radix: 'error',
            semi: 'off',
            'space-before-function-paren': 'off',
            'space-in-parens': ['off', 'never'],
            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/']
                }
            ],
            'use-isnan': 'error',
            'valid-typeof': 'off',
            'lines-between-class-members': 'off',
            'no-implicit-coercion': 'off',

            // Import sorting
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            // Prettier rules (should be last)
            ...prettierConfig.rules,
            'prettier/prettier': 'error'
        }
    },

    // HTML template files configuration
    {
        files: ['**/*.html'],
        languageOptions: {
            parser: angularTemplateParser
        },
        plugins: {
            '@angular-eslint/template': angularTemplate
        },
        rules: {
            ...angularTemplate.configs.recommended.rules,
            ...angularTemplate.configs.accessibility.rules,
            '@angular-eslint/template/alt-text': 'error',
            '@angular-eslint/template/elements-content': 'error',
            '@angular-eslint/template/label-has-associated-control': 'error',
            '@angular-eslint/template/table-scope': 'error',
            '@angular-eslint/template/valid-aria': 'error',
            '@angular-eslint/template/click-events-have-key-events': 'error',
            '@angular-eslint/template/mouse-events-have-key-events': 'error',
            '@angular-eslint/template/no-autofocus': 'error',
            '@angular-eslint/template/no-distracting-elements': 'error'
        }
    }
];
