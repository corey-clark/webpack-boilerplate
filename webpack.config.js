var path = require('path');

module.exports = { 
    
    entry: [ path.resolve(__dirname, 'src', 'index.js') ],

    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    devServer: { 
        inline: true,
        contentBase: path.join(__dirname, 'dist')
    },

    module: { 
        loaders: [ 
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ] 
    }
};
