const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // 手动配置 loader 路径
    resolveLoader: {
      modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   // 直接指明 loader 的绝对路径
        //   use: path.resolve(__dirname, 'loaders/simple-loader-with-pitch')
        // },
        {
          // 配置处理 css 的 loader
          test: /\.css$/,
          use: ['simple-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      // 渲染首页
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
}