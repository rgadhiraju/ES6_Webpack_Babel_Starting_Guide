module.exports = {
    entry: [
      './app/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    // NOTE 'Setting up Webpack'
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000, // most common port
    contentBase: './build',
    inline: true
  }
  // NOTE 'Adding babel to Webpack'
}
