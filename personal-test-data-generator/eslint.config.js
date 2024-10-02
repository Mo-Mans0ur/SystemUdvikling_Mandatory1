import globals from 'globals';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    }
  },
  rules: {
    'no-console': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  },
  plugins: {
    js: pluginJs.configs.recommended,
  }
});
