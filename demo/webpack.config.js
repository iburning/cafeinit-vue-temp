/**
 * @fileOverview router
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './js/main.js'),

  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: '/js/',       // important for dev-server
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      },

      {
        // use css-loader for *.css files
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  resolve: {
    alias: {
      'cafeinit-vue': path.resolve(__dirname, '../dist/cafeinit-vue.js'),
      'cafeinit.css': path.resolve(__dirname, '../dist/css/cafeinit.css')
    }
  }
}
