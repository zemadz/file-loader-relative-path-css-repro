const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  root: path.join(__dirname, ''),
  scss: path.join(__dirname, 'scss')
};

const extractTextPlugin = new ExtractTextPlugin('[name].css');

module.exports = {
  devtool: 'none',
  entry: {
    'css/style': './scss/style.scss'
  },
  module: {
    rules: [{
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader',
        options: {
          emitFile: false,
          name: '[name].[ext]',
          useRelativePath: true
        }
      }]
    }, {
      test: /\.(scss)$/,
      use: extractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: false
          }
        }, {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: false
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }]
  },
  plugins: [extractTextPlugin],
  output: {
    filename: '[name].js',
    path: paths.root
  }
};
