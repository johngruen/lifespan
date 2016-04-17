const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  debug: true,
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
      },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=750000'
      },
      {
        test: /\.svg$/,
        loader: 'raw',
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules/node-normalize-scss')]
  }
};
