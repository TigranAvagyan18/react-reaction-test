module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'airbnb-base',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'consistent-return': 'off'
	}
};
