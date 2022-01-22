import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'dist/loose/index.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        globals: {
          crypto: 'crypto',
        },
        sourcemap: true,
      },
      {
        format: 'es',
        file: 'dist/esm/index.js',
        globals: {
          crypto: 'crypto',
        },
        sourcemap: true,
      },
      {
        format: 'umd',
        file: 'dist/umd/index.js',
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
        './dist/loose/**/*.js',
      ],
    },
  },
  {
    input: 'dist/loose/index.d.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.d.ts',
      },
      {
        format: 'es',
        file: 'dist/esm/index.d.ts',
      },
      {
        format: 'umd',
        file: 'dist/umd/index.d.ts',
      },
    ],
    plugins: [
      dts(),
    ],
    watch: {
      buildDelay: 1000,
      include: [
        './dist/loose/**/*.d.ts',
      ],
    },
  },
];
