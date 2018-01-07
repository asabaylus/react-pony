import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import conditional from 'rollup-plugin-conditional';
import stripPropTypes from 'rollup-plugin-strip-prop-types';

// Test for Production
const isProduction = process.env.NODE_ENV === "production";

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'Pony',
      format: 'umd',
      sourcemap: true
    },
    {
      file: 'lib/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  globals: {
    'react': 'React'
  },
  external: [
    'react',
    'react-dom'
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
    ])
  ]
}
