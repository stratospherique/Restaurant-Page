const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
           // Creates `style` nodes from JS strings
           'style-loader',
           // Translates CSS into CommonJS
           'css-loader',
           // Compiles Sass to CSS
           'sass-loader',
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}