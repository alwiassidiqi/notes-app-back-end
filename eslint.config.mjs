import globals from 'globals';
import pluginJs from '@eslint/js';
import dasStyle from 'eslint-config-dicodingacademy';


/** @type {import('eslint').Linter.Config[]} */
export default [
  dasStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];