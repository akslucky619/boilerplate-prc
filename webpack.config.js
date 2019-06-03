const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, ''),
    compress: true,
    port: 9000
  },
  module: {
      rules: [
    { 
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
    },{
            test: /\.(s*)css$/,
            use: [
            "style-loader", 
            "css-loader", 
            "sass-loader" 
        ]}
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'boilerplate basics',
            template: './index.html'
        })
      ]
};