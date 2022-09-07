const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'main_[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.(mp3|png|ico)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        },
        {
            test: /\.s?[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({ filename: 'name.[contenthash].css' }),
        new bundleAnalyzer()
    ],
    devServer: {
        port: 80,
        watchFiles: ['./*']
    },
}