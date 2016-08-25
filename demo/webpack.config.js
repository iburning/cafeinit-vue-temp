/**
 * @fileOverview router
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

var path = require('path')

module.exports = {
  // entry point of our application
  entry: path.resolve(__dirname, './js/main.js'),
  // where to place the compiled bundle
  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      }
    ]
  }
}
