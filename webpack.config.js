const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 1234,
        historyApiFallback: true,
    },
    stats: 'minimal',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'ghStructure.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/demo.html',
        }),
        new MiniCssExtractPlugin({ filename: "ghStructure.css"}),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
}

module.exports = config