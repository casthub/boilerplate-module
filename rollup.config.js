import { resolve as pathResolve } from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import scss from 'rollup-plugin-scss';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.ts',
	output: {
		exports: 'default',
		name: 'module',
		file: 'index.js',
		format: 'cjs',
		strict: false,
		sourcemap: false,
	},
	plugins: [
		resolve(),
		alias({
			entries: [{ find: '@', replacement: pathResolve(__dirname, 'src') }],
		}),
		commonjs(),
		scss({
			output: false,
		}),
		typescript(),
		production && terser(),
	],
};
