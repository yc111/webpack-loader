
const loaderUtils = require('loader-utils');
const validate = require('schema-utils');
module.exports = function(source) {
  // 获取 loader 配置项
  let options = loaderUtils.getOptions(this) || {};
  // 定义配置项结构和类型
  let schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      }
    }
  }
  // 验证配置项是否符合要求，当配置项不符合要求，编译会在这里中断并在控制台打印错误信息
  validate(schema, options);
  return source;
}