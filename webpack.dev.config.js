const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  devServer: {
    contentBase: './src'
  },
  output: {
     path: __dirname + '/dist',
     publicPath: '/',
     filename: 'bundle.js'
  },
  module: {
   loaders: [
     {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
     {test: /(\.css)$/, loaders: ['style', 'css', 'postcss']},
   ]
  },
    postcss: function () {
        return [precss, autoprefixer];
    }
};
