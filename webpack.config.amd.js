/**
 * @fileOverview webpack config
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

module.exports = {
  entry: {
    'cafeinit-vue': './src/js/main.js',
    'cafeinit-vue-bootstrap': './src/js/mainForBootStrap.js'
  },

  output: {
    path: './dist/js',
    filename: '[name].amd.js',
    library: 'CafeinitVue',
    libraryTarget: 'amd'  // Export to AMD (optionally named - set the name via the library option)
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
      }
    ]
  },

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
