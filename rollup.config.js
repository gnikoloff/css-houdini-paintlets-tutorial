import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-import-css'
import copy from 'rollup-plugin-copy'

const sharedPlugins = [commonjs(), nodeResolve(), css()]

export default [
  {
    input: 'src/app.js',
    output: [{ file: 'dist/bundle.js', format: 'iife' }],
    plugins: [
      ...sharedPlugins
      // copy({
      //   targets: [{ src: "index.html", dest: "dist" }]
      // })
    ]
  },
  {
    input: 'src/paintlet-01/index.js',
    output: [{ file: 'dist/paintlet-01.js', format: 'iife' }],
    plugins: [...sharedPlugins]
  }
]
