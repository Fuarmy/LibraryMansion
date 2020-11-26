/**
 * 获取数据的类型
 * 
 * @param {*} data 
 * @return {string} Object,Number,Boolean,String,Array,Function,Undefined,Null,Date 等
 */
function dataType(data) {
  return data === data? Object.prototype.toString.call(data).match(/[A-Z][a-z]+/)[0] : 'NaN';
}

module.exports = dataType;