import nodePath from 'node:path'
import { fileURLToPath } from 'node:url'

import { merge } from 'webpack-merge'

import common from './webpack.common.js'

// const __dirname = nodePath.dirname(fileURLToPath(import.meta.url))

export default merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
        compress: true,
        historyApiFallback: true,
        port: 4400,
        hot: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },
})
