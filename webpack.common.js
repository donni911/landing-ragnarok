const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/assets/js/index.js',
    },

    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'God of War',
            template: 'src/index.html',
        }),
    ],

    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'src/assets'),
    //     },
    //     compress: true,
    //     port: 9000,
    //     hot: true,
    //     open: true,
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(s[ac]ss|css)$/i,
    //             use: ['style-loader', 'css-loader', 'sass-loader'],
    //         },
    //         {
    //             test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //             type: 'asset/resource',
    //         },
    //     ],
    // },

    // resolve: {
    //     alias: {
    //         '@images': path.resolve(__dirname, 'src/assets/images'),
    //         '@js': path.resolve(__dirname, 'src/assets/js'),
    //         '@styles': path.resolve(__dirname, 'src/assets/styles'),
    //     },
    // },
}
