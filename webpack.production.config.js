var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  debug: false,
  entry: [
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
      config: path.join(ROOT_PATH, 'src/app/config/config.production'),
      action: path.join(ROOT_PATH, 'src/app/action'),
      store: path.join(ROOT_PATH, 'src/app/store/store.production')
    }
  },
  output: {
    path: ROOT_PATH + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(ROOT_PATH, 'src/index.html')}
    ])
  ]
};
