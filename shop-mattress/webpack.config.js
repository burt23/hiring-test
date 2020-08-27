const path = require("path")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SCSS_DIR = path.resolve(__dirname, 'src/scss')
console.log(SCSS_DIR)

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "js/bundle.js",
        publicPath: "/"
    }, 
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        })
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
}