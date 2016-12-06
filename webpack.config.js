const webpack  = require('webpack');
const path     = require('path');
const merge    = require('webpack-merge');
const validate = require('webpack-validator');
const jQuery   = new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
});
const paths    = {
    app: path.resolve(__dirname, 'src')
};

const common = {
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
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
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ["", '.js', '.jsx', '.css', '.scss', '.json', '.jpg', '.jpeg']
    },
};

const dev = {
    entry: ['webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve('./index.jsx')
    ],
    output: {
        publicPath: 'http://localhost:3000/public/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), jQuery],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|public)/,

                loaders: ['react-hot', 'babel']
            }
        ]
    }

};

const prod = {
    entry: path.resolve('index.jsx'),
    output: {
        publicPath: './public/'
    },
    plugins: [jQuery],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|public)/,

                loader: "babel",
            }

        ]
    }
};


let config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(prod, common);
        break;
    case 'start':
        config = merge(dev, common);
}

module.exports = validate(config);