import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
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
            'simple-import-sort': simpleImportSort,
            import: importPlugin
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json'
                }
            }
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

            // Architecture-based import restrictions
            'import/no-restricted-paths': [
                'error',
                {
                    zones: [
                        // Shared layer cannot import from any other application layer
                        {
                            target: './src/app/shared/**/*',
                            from: [
                                './src/app/ui/**/*',
                                './src/app/core/**/*',
                                './src/app/features/**/*',
                                './src/app/pages/**/*',
                                './src/app/layouts/**/*'
                            ],
                            message:
                                'Shared layer cannot import from other application layers. Only external libraries allowed.'
                        },
                        // UI layer can only import from Shared
                        {
                            target: './src/app/ui/**/*',
                            from: [
                                './src/app/core/**/*',
                                './src/app/features/**/*',
                                './src/app/pages/**/*',
                                './src/app/layouts/**/*'
                            ],
                            message: 'UI layer can only import from Shared layer.'
                        },
                        // Core layer can only import from UI and Shared
                        {
                            target: './src/app/core/**/*',
                            from: ['./src/app/features/**/*', './src/app/pages/**/*', './src/app/layouts/**/*'],
                            message: 'Core layer can only import from UI and Shared layers.'
                        },
                        // Features layer can only import from Core, UI, and Shared
                        {
                            target: './src/app/features/**/*',
                            from: ['./src/app/pages/**/*', './src/app/layouts/**/*'],
                            message: 'Features layer can only import from Core, UI, and Shared layers.'
                        },
                        // Pages layer can only import from Features, Core, UI, and Shared
                        {
                            target: './src/app/pages/**/*',
                            from: ['./src/app/layouts/**/*'],
                            message: 'Pages layer can only import from Features, Core, UI, and Shared layers.'
                        },
                        // Internal Shared layer dependencies
                        {
                            target: './src/app/shared/constants/**/*',
                            from: [
                                './src/app/shared/enums/**/*',
                                './src/app/shared/types/**/*',
                                './src/app/shared/models/**/*',
                                './src/app/shared/utils/**/*'
                            ],
                            message: 'Constants cannot import from other Shared subdirectories.'
                        },
                        {
                            target: './src/app/shared/enums/**/*',
                            from: [
                                './src/app/shared/types/**/*',
                                './src/app/shared/models/**/*',
                                './src/app/shared/utils/**/*'
                            ],
                            message: 'Enums can only import from Constants.'
                        },
                        {
                            target: './src/app/shared/types/**/*',
                            from: ['./src/app/shared/models/**/*', './src/app/shared/utils/**/*'],
                            message: 'Types can only import from Enums and Constants.'
                        },
                        {
                            target: './src/app/shared/models/**/*',
                            from: ['./src/app/shared/utils/**/*'],
                            message: 'Models can only import from Types, Enums, and Constants.'
                        },
                        // Internal Core layer dependencies
                        {
                            target: './src/app/core/guards/**/*',
                            from: ['./src/app/core/interceptors/**/*', './src/app/core/directives/**/*'],
                            message: 'Guards can only import from Services within Core layer.'
                        },
                        {
                            target: './src/app/core/interceptors/**/*',
                            from: ['./src/app/core/guards/**/*', './src/app/core/directives/**/*'],
                            message: 'Interceptors can only import from Services within Core layer.'
                        },
                        {
                            target: './src/app/core/directives/**/*',
                            from: ['./src/app/core/guards/**/*', './src/app/core/interceptors/**/*'],
                            message: 'Directives can only import from Services within Core layer.'
                        }
                    ]
                }
            ],

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
