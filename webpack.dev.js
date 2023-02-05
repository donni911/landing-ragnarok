import { merge } from 'webpack-merge'

import common from './webpack.common.js'


export default merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: './src/templates',
        compress: true,
        historyApiFallback: true,
        port: 4400,
        hot: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },
})
