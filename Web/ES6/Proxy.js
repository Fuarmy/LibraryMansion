/**
 * 使用get陷阱验证对象结构（Object Shape）
 */
let proxyGet = new Proxy({}, {
    get(trapTarget, key, receiver) {
        if(!(key in receiver)) {
            throw new TypeError(`属性${key}不存在`);
        }
        return Reflect.get(trapTarget, key, receiver);
    }
});

// proxyGet.name = "proxy";
// console.log(proxyGet.name);
// console.log(proxyGet.nme);

/**
 * 使用 has 陷阱隐藏已有属性
 */
let targetHas = {
    name: "targetHas",
    value: 442
}
// console.log("value" in targetHas);
// console.log("toString" in targetHas);
let proxyHas = new Proxy(targetHas, {
    has(trapTarget, key) {
        if (key === "value") {
            return false;
        } else {
            return Reflect.has(trapTarget, key);
        }
    },
    // 使用 trapTarget 校验属性，会忽略 has 陷阱
    // trapTarget: 目标对象 receiver(接收者)：相当于proxyHas
    get(trapTarget, key, receiver) {
        if(!(key in receiver)) {
            throw new TypeError(`属性${key}不存在`);
        }
        return Reflect.get(trapTarget, key, receiver);
    }
});

// console.log(proxyHas.value);
// console.log("value" in proxyHas);

/**
 * 使用 deleteProperty 陷阱防止删除属性
 */
let targetDel = {
    name: "targeDel",
    value: 43
};
let proxyDel = new Proxy(targetDel, {
    deleteProperty(trapTarget, key) {
        if(key==="value") {
            return false;
        } else {
            return Reflect.deleteProperty(trapTarget, key);
        }
    }
});

// 删除value属性
// console.log("value" in proxyDel);
// console.log(delete proxyDel.value);
// console.log("value" in proxyDel);

// 删除name属性
// console.log("name" in proxyDel);
// console.log(delete proxyDel.name);
// console.log("name" in proxyDel);
