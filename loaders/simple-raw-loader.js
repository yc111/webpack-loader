
module.exports = function(source) {
    // 将输出 buffer 类型的二进制数据
    console.log(source);
    // todo handle source
    let result = 'results of processing source'
    return `
      module.exports = '${result}'
    `;
  }
  // 告诉 wepack 这个 loader 需要接收的是二进制格式的数据
  module.exports.raw = true;