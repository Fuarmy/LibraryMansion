/**
 * 手写源码：JSON.parse和JSON.stringify(不带replacer和space参数的简化版本)
 */
 const JSON = {
    parse: function(jsonStr) {
        return eval(`(${jsonStr})`);
    },
    stringify: function(jsonStr) {
        switch(Object.prototype.toString.call(jsonStr)) {
            case '[object Null]':
            case '[object Boolean]':
            case '[object Number]':
                return String(jsonStr);
            case '[object String]':
            case '[object Date]':
                return `"${jsonStr.toJSON ? jsonStr.toJSON() : jsonStr.toString()}"`;
            case '[object Object]':
                let resultObj = '{';
                for(key in jsonStr) {
                    if(this.stringify(key) !== undefined && this.stringify(jsonStr[key]) !== undefined) {
                        resultObj += `"${key}":${this.stringify(jsonStr[key])},`;
                    }
                }
                resultObj = resultObj.slice(0, -1);
                return resultObj += '}';
            case '[object Array]': 
                let resultArr = '[';
                for(item of jsonStr) {
                    resultArr += (this.stringify(item) === undefined ? null : this.stringify(item)) + ",";
                }
                resultArr = resultArr.slice(0, -1);
                return resultArr += ']';
            case '[object Set]':
            case '[object Map]':
            case '[object RegExp]':
                return "{}";
            case '[object Undefind]':
            case '[object Function]': 
            case '[object Symbol]':
                return undefined;
        }
    }
}