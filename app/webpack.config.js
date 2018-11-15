const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (environment) => {

    return {

        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.bundle\.js$/,
                    use: 'bundle-loader'
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                },
                {
                    test: /\.css$/, use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
                },
            ]
        },
        devServer: {
            proxy: {
                '/api': {
                    target: 'https://api.coinmarketcap.com/v2',
                    pathRewrite: { '^/api': ''},
                    changeOrigin: true,
                    secure: false,
                }
            }
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
}