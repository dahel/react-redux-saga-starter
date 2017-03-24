var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.resolve(ROOT_PATH, 'src/index.jsx')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    root: ROOT_PATH,
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: path.join(ROOT_PATH, 'src/app/config/config.development'),
      action: path.join(ROOT_PATH, 'src/app/action'),
      store: path.join(ROOT_PATH, 'src/app/store/store.development')
    }
  },
  output: {
    path: ROOT_PATH + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: ROOT_PATH + '/dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(ROOT_PATH, 'src/index.html')}
    ])
  ]
};
