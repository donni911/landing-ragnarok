import nodePath from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __dirname = nodePath.dirname(fileURLToPath(import.meta.url))

function walk(dir) {
    console.log(dir)
    let results = []
    const list = fs.readdirSync(dir)
    list.forEach((file) => {
        file = `${dir}/${file}`
        const stat = fs.statSync(file)
        if (
            stat &&
            stat.isDirectory() &&
            nodePath.basename(file).indexOf('_') !== 0
        ) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file))
        } else if (
            stat &&
            !stat.isDirectory() &&
            nodePath.extname(file) === '.twig' &&
            nodePath.basename(file).indexOf('_') !== 0
        ) {
            /* Is a file */
            results.push(file)
        }
    })
    return results
}
const files = walk('./src/templates')

const htmlPlugins = files.map(
    (file) =>
        new HtmlWebpackPlugin({
            filename: file
                .replace('./src/templates/', '')
                .replace('.twig', '.html'),
            template: nodePath.resolve(__dirname, file),
            hash: true,
        })
)

const common = {
    entry: {
        app: './src/assets/js/index.js',
    },

    output: {
        clean: true,
        path: nodePath.resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: nodePath.resolve(__dirname, 'src/assets/images'),
                    to: nodePath.resolve(__dirname, 'dist/assets/images'),
                },
            ],
        }),
    ].concat(htmlPlugins),

    module: {
        rules: [
            {
                test: /\.twig$/,
                use: [
                    'raw-loader',
                    {
                        loader: 'twig-html-loader',
                        options: {
                            data: {},
                        },
                    },
                ],
            },
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
                include: nodePath.resolve(__dirname, 'src'),
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
        ],
    },

    resolve: {
        alias: {
            '@': nodePath.resolve(__dirname, 'src/assets'),
            '@images': nodePath.resolve(__dirname, 'src/assets/images'),
            '@js': nodePath.resolve(__dirname, 'src/assets/js'),
            '@styles': nodePath.resolve(__dirname, 'src/assets/styles'),
        },
    },
}

export default common
