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
        // {
        //   // 配置处理 css 的 loader
        //   test: /\.css$/,
        //   use: ['simple-style-loader', 'css-loader']
        // },
        {
            test: /\.js$/,
            use: [{
                // 此 loader 会验证 options
                loader: 'simple-loader-with-validate',
                options: {
                    // 这里 loader 中规定 name 的值必须是 string，验证不通过就会报错。
                    name: 111
                }
            }]
          }
      ]
    },
    // plugins: [
    //   // 渲染首页
    //   new HtmlWebpackPlugin({
    //     template: './src/index.html'
    //   })
    // ]
}