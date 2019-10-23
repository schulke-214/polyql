import pkg from './package.json';

import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'lib/index.ts',
	output: [
		{
			file: pkg.module,
			format: 'es'
		},
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.browser,
			format: 'iife',
			name: pkg.name
		}
	],
	external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
	plugins: [
		typescript(),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true
		}),
		builtins(),
		resolve()
	],
	external: []
};
