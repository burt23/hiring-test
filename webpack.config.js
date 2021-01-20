const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "js/bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}