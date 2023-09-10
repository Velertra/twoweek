const path = require('path');
const Dotenv = require('dotenv-webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  resolve: {
    fallback: {
      fs: require.resolve('path-browserify'),
      path: require.resolve('path-browserify')
    },
  },
   plugins: [
    new Dotenv(),
  ],

};