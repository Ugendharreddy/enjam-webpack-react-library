const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_PATH,

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devServer: {
        open: true
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
        new ForkTsCheckerWebpackPlugin(),
    ],
}