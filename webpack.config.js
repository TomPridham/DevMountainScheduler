const webpack = require('webpack');
const path    = require('path');

const paths = {
    app: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    devTool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel?cacheDirectory',
                exclude: /(node_modules|public)/
            },
            {
                test: /(\.css|\.less)/,
                loader: 'style!css!less'
            },
            {
                test: /\.woff2$|\.woff$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: "file"
            },
            {
                test: /\.json$/,
                loader: "json-loader"

            }
        ]
    }
};
