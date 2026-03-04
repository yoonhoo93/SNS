import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      /* 추가항목 */
      /* 선언만 하고 사용하지않는 변수가 있을때 에러로 표기하도록 하는 옵션 */
      "@typescript-eslint/no-unsed-vars" : "off", 
      /* 명시적으로 특정변수에 any타입을 적용할수 없도록 막아주는 옵션 */
      "@typescript-eslint/no-explicit-any" : "off",
    },
  },
)
