// rollup.config.mjs
import path, { resolve as resolvePath } from 'path';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser'
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const pkg = JSON.parse(readFileSync(resolvePath('./package.json'), 'utf-8'));
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

export default {
  input: 'src/index.tsx',
  external: ['react', 'react-dom', 'antd'],
  output: [
    // CommonJS build
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    // ES module build
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    // UMD build (for AMD / <script> use)
    {
      file: pkg.browser || 'dist/index.umd.js',
      format: 'umd',
      name: 'ScanteReactTsAntdComponent',
      globals: {
        react:     'React',
        'react-dom':'ReactDOM',
        antd:      'antd'
      },
      sourcemap: true
    }
  ],
  plugins: [
    // Only replace NODE_ENV, do NOT touch `define`
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),

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

    copy({}),

    // Minify (still won’t touch AMD `define`)
    terser()
  ]
};
