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
            '**/*.css',
            '**/*.scss',
            '**/*.md',
            '**/*.yml',
            'node_modules/**',
            'e2e/**',
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

            // Essential overrides only
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/dot-notation': ['error', { allowIndexSignaturePropertyAccess: true }],

            // Angular component/directive selectors
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
            ...angularTemplate.configs.accessibility.rules
        }
    }
];
