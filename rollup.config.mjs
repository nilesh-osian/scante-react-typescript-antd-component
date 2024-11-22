// rollup.config.mjs

import path,{resolve as resolvePath} from 'path';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import { readFileSync } from 'fs';
const pkg = JSON.parse(readFileSync(resolvePath('./package.json'), 'utf-8'));

import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
	input: 'src/index.tsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs', // CommonJS format
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'esm', // ES Module format
			sourcemap: true
		}
	],
	plugins: [
		alias({
			entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
		}),
		peerDepsExternal(),
		resolve(),
		commonjs(),
		json(),
		typescript({
			useTsconfigDeclarationDir: true,
			exclude: [
				'**/*.stories.tsx',
				'**/*.stories.ts',
				'**/*.test.tsx',
				'**/*.test.ts'
			]
		}),
		postcss(),
		copy({
			targets: [{ src: 'src/extra-lib/gauge.js', dest: 'dist/extra-lib' }]
		})
	],
	external: ['react', 'react-dom', 'antd'] // Exclude peer dependencies
};
