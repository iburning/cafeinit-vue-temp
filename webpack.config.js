module.exports = {
  // entry point of our application
  entry: './src/main.js',
  // where to place the compiled bundle
  output: {
    path: './dist',
    filename: 'cafeinit-vue.js'
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
