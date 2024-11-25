import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

const ignorePatterns = [
  '*', // ignore everything
  '!src', //except source code
];

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { settings: { react: { version: 'detect' } } },
  { languageOptions: { globals: globals.browser } },
  { ignores: ignorePatterns },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];