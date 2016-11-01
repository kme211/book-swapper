const webpack = require('webpack');
const path = require('path');
const atImport = require("postcss-import");
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  devtool: '#inline-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel']
    }]
  },
  postcss: function(webpack) {
    return [
      atImport({addDependencyTo: webpack}),
      precss,
      autoprefixer
    ];
  }
};
