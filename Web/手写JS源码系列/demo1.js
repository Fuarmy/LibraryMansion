// ES5 创建一个Person类
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // return {xx:`${this.firstName} ${this.lastName}`};
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

/**
 * 手写源码： new关键字实现
 * @param {object} target 目标对象
 * @param  {...any} rest 剩余参数
 * @returns 新的对象
 */
function _new(target, ...rest) {
    // 基于目标对象的原型创建一个新的对象
    let newObj = Object.create(target.prototype);
    // 添加属性到新创建的newObj上, 并获取target函数执行的结果.
    const result = target.call(newObj, ...rest);
    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return typeof result === 'object' ? result : newObj;
}

const tb = new Person('Chen', 'Tianbao');
console.log(tb);
const tb2 = _new(Person, 'Chen', 'Tianbao');
console.log(tb2);

