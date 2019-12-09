const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const mode = 'development';

module.exports = merge(common, {
    mode: mode,
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8100,
      open: false,
      progress: true,
      openPage: '',
      stats: 'errors-only',
      hot: true
    },
    plugins:[
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 8080,
          open: false,
          plugins: ['bs-console-qrcode'],
          // proxy the Webpack Dev Server endpoint
          proxy: 'http://localhost:8100/'
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
        }
      ),
      new webpack.EnvironmentPlugin({
        // use 'development' unless process.env.NODE_ENV is defined
        NODE_ENV: mode,
        DEBUG: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Dev P5 Webpack'
      })
    ]
});