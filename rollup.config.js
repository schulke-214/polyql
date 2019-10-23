import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'lib/index.js',
	output: [
		{
			file: 'dist/polyql.es.js',
			format: 'es'
		},
		{
			file: 'dist/polyql.cjs.js',
			format: 'cjs'
		}
	],
	plugins: [builtins(), resolve()],
	external: []
};
