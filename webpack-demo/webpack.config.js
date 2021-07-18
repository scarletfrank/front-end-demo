const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    // index: 'index.html',
    compress: true, 
    port: 9000,
    open: true, // 自动打开浏览器
    hot: true, 
    // 热加载
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};