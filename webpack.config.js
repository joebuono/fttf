const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = { 
  entry: `${SRC_DIR}/index.jsx`, 
  watch: true,
  output: { 
    filename: 'bundle.js', 
    path: DIST_DIR 
  }, 
  module: { 
    rules: [
      { 
        test: /.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ] 
  } 
}