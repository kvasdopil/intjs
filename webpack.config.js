var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://192.168.17.202:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};