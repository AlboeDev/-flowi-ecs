import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'dist/raw/index.js',
    output: [
      {
        format: 'es',
        file: 'dist/module/index.js',
        globals: {
          crypto: 'crypto',
        },
        sourcemap: true,
      },
      {
        format: 'umd',
        file: 'dist/bundle/index.js',
        globals: {
          crypto: 'crypto',
        },
        name: 'FlowiCore',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      terser(),
    ],
    watch: {
      buildDelay: 1000,
      include: [
        './dist/raw/**/*.js',
      ],
    },
  },
  {
    input: 'dist/raw/index.d.ts',
    output: [
      {
        format: 'es',
        file: 'dist/module/index.d.ts',
      },
      {
        format: 'umd',
        file: 'dist/bundle/index.d.ts',
      },
    ],
    plugins: [
      dts(),
    ],
    watch: {
      buildDelay: 1000,
      include: [
        './dist/raw/**/*.d.ts',
      ],
    },
  },
];
