
const loaderUtils = require('loader-utils');
module.exports = function(source) {
  // 获取 loader 的配置项
  let options = loaderUtils.getOptions(this) || {};
  // 获取用户设置的文件名或者制作新的文件名
  // 注意第三个参数，是计算 contenthash 的依据
  let url = loaderUtils.interpolateName(this, options.filename || '[contenthash].[ext]', {content: source});
  // 输出文件
  this.emitFile(url, source);
  // 返回导出文件地址的模块脚本
  return `module.exports = '${JSON.stringify(url)}'`;
}
module.exports.raw = true;