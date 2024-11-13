// rollup.config.js

const path = require('path');
const alias = require('@rollup/plugin-alias');
const typescript = require('rollup-plugin-typescript2');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');

const pkg = require('./package.json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm', // ES Module format
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['**/*.stories.tsx', '**/*.stories.ts', '**/*.test.tsx', '**/*.test.ts'],
    }),
    postcss(),
  ],
  external: ['react', 'react-dom', 'antd'], // Exclude peer dependencies
};
