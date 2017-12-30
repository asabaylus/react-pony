import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import conditional from 'rollup-plugin-conditional';
import stripPropTypes from 'rollup-plugin-strip-prop-types';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import gzip from 'rollup-plugin-gzip';

// Test for Production
const isProduction = process.env.NODE_ENV === "production";

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      name: 'Pony',
      format: 'iife'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.umd.js',
      name: 'Pony',
      format: 'umd',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ],
  plugins: [
    postcss({}),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    conditional(isProduction, [
      stripPropTypes(), // save ~35kb remove propTypes
      // uglify({}, minify),
      // gzip()
    ])
  ]
}
