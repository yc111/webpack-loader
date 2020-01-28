const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // 直接指明 loader 的绝对路径
          use: path.resolve(__dirname, 'loaders/simple-loader')
        }
      ]
    }
}