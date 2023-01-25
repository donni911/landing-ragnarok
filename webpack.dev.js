const path = require('path')

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    // devServer: {
    //     static: './dist',
    //     hot: true,
    // },

    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'src/assets'),
        // },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
        ],
    },

    resolve: {
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@js': path.resolve(__dirname, 'src/assets/js'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
        },
    },
})
