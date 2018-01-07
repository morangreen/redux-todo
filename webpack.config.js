const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [process.cwd() + '/src/index'],
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true
   // hot: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "css-loader!autoprefixer-loader"
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.dot$/,
        loader: "dot-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/bundle.css',
      allChunks: true,
    })
  ],
  devtool: 'source-map'
};