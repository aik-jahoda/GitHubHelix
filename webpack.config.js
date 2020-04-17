const path = require('path');

module.exports = {
    entry: {
        background: './src/background.ts',
        options: './src/options.ts',
        githubChecksContentScript: './src/githubChecksContentScript.ts',
        githubConversationContentScript: './src/githubConversationContentScript.ts'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};