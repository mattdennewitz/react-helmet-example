var path = require('path');

module.exports = {
    entry: './client',

    output: {
        path: path.join(__dirname, 'public/'),
        filename: 'client.js',
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
        ]
    }
};
