import { exec } from 'child_process';
import pkg from './package.json';

import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/index.ts',
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
			resolve({
				browser: true,
				preferBuiltins: false
			}),
			commonjs(),
			builtins(),
			babel({
				exclude: 'node_modules/**',
				runtimeHelpers: true
			}),
			typescript(),
			terser({
				output: {
					comments: () => false
				}
			}),
			{
				generateBundle() {
					exec(`${process.cwd()}/scripts/post-build.sh`);
				}
			}
		]
	}
];
