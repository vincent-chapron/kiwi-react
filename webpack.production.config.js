const webpack = require('webpack');
const path = require('path');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, "public"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
