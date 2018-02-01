var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: [/node_modules/],
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
}