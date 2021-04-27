/**
 * 对象深拷贝
 * @param {Object} originObj 
 * @returns 
 */
const copyObj = (originObj) => {
    const originPrototype = Object.getPrototypeOf(originObj);
    let newObj = Object.create(originPrototype);

    const originObjOwnProperties = Object.getOwnPropertyNames(originObj);
    originObjOwnProperties.forEach((property) => {
        const prototypeDesc = Object.getOwnPropertyDescriptor(originObj, property);
        Object.defineProperty(newObj, property, prototypeDesc);
    });

    return newObj;
}
/**
 * 正则拷贝
 * @param {*} target 
 * @param {*} isDeep 
 * @returns 
 */
function copyReg(target, isDeep) {
    var regFlag = /\w*$/;
    var result = new target.constructor(target.source, regFlag.exec(target));
    if (isDeep) {
        result.lastIndex = 0;
    } else {
        result.lastIndex = target.lastIndex;
    }

    return result;
}