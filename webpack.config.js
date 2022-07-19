const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_PATH,

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        // library: "enjam-webpack-react-library",
        // libraryTarget: "umd"
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devtool: 'source-map',

    devServer: {
        open: true
    },

    performance: {
        hints: false
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    plugins: [
        // new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
        new HtmlWebpackPlugin({ inject: true, template: "./src/index.html" }),
        new ForkTsCheckerWebpackPlugin(),
    ],

    // externals: {
    //     // react: "react",
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: '_',
    //     },
    //     "react-dom": {
    //         commonjs: "react-dom",
    //         commonjs2: "react-dom",
    //         amd: "react-dom",
    //         root: '_',
    //     }
    // },

    optimization: {
        minimize: false
    }
}