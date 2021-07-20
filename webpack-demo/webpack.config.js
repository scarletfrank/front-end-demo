const path = require('path');
// 热加载插件
const webpack = require('webpack')
// 生成HTML页面的插件
// 1. 自动在内存中根据模板生成页面
// 2. 自动把打包的js追加到页面中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        // 先调用css-loader，然后调用style-loader
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/i,
        use: 'url-loader'
      }
    ],
  },
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};