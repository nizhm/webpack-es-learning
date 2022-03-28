'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ECMAScript"
    })
  ],
  devServer: {
    contentBase: 'build',
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(csv|tsv)/i,
        use: 'csv-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
}