const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/
      },
      {
        test: require.resolve('p5'),
        use: [{
          loader: 'expose-loader',
          options: 'p5'
        }]
      },
      {
        test: path.resolve(__dirname, 'src', 'index.js'),
        use: [{
          loader: 'expose-loader',
          options: 'p5Instance'
        }]
      }
    ],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },  
  plugins: [
    new CleanWebpackPlugin(), 
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets'),
      }
    ])
  ]
};
