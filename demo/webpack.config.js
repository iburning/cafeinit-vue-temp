/**
 * @fileOverview router
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

var path = require('path')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './js/main.js'),
    'main-amazeui': path.resolve(__dirname, './js/main-amazeui.js'),
    'main-bootstrap': path.resolve(__dirname, './js/main-bootstrap.js')
  },

  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: '/js/',       // important for dev-server
    filename: '[name].js'
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
      },

      // // the url-loader uses DataUrls.
      // // the file-loader emits files.
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader?limit=10000&minetype=application/font-woff'
      // },
      //
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader'
      // }
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
      'cafeinit-vue': path.resolve(__dirname, '../dist/js/cafeinit-vue.amd.js'),
      'cafeinit-vue-amazeui': path.resolve(__dirname, '../dist/js/cafeinit-vue-amazeui.amd.js'),
      'cafeinit-vue-bootstrap': path.resolve(__dirname, '../dist/js/cafeinit-vue-bootstrap.amd.js'),
      'cafeinit.css': path.resolve(__dirname, '../dist/css/cafeinit.css')
    }
  }
}
