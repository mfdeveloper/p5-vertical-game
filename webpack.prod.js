const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = 'production';

module.exports = merge(common, {
    mode: mode,
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: mode,
            DEBUG: false
        }),
        new HtmlWebpackPlugin({
            title: 'Yodel Climber',
            meta: {
                viewport: "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,shrink-to-fit=no"
            }
        })
    ]
});