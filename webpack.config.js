/**
 * @fileOverview webpack config
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

var webpack = require('webpack');

module.exports = {
  entry: {
    'cafeinit-vue': './src/js/main.js',
    'cafeinit-vue-amazeui': './src/js/mainForAmazeUI.js',
    'cafeinit-vue-bootstrap': './src/js/mainForBootstrap.js'
  },

  output: {
    path: './dist/js',
    filename: '[name].js',
    library: 'CafeinitVue',
    libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
  },

  module: {
    loaders: [
      {
        // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        // use css-loader for *.css files
        test: /\.css$/,
        loader: 'style!css'
      },

      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      }
    ]
  },

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
