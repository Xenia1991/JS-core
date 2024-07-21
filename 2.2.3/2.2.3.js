function deepEqual (obj1, obj2) {
    if (obj1 === null && obj2 === null) {
        return true
    }
    if (obj1 === null && obj2 !== null || obj1 !== null && obj2 === null) {
        return false
    }
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return obj1 === obj2
    }

    let firstObjKeys = Object.keys(obj1);
    let secondObjKeys = Object.keys(obj2);
    if (firstObjKeys.length !== secondObjKeys.length) {
        return false;
    }

    for (let key in obj1) {
        const values1 = obj1[key];
        const values2 = obj2[key];
        const areObjects = values1 != null && typeof values1 === 'object' && values2 != null && typeof values2 === 'object';
        if (areObjects && !deepEqual(values1, values2) || !areObjects && values1 !== values2) {
            return false;
        }
    }

    return true;
}

const a = {"name":"Misha","order":{"price":20}};
const b = {"order":{"price":20},"name":"Misha"};

const c = {"name":"Misha","order":{"price":20}};
const d = {"name":"Misha","order":{"price":20},"extraField":null};

const e = {"name":"Misha","order":{"price":20}};
const f = {"name":"Misha","order":{"price":1000}};

const firstObject = {
    a: {
        b: {
            c: 1,
            d: 'string',
            e: {
                num: 1
            }
        }
    }
};

const secondObject = {
    a: {
        b: {
            e: {
                num: 1,
            },
            d: 'string',
            c: 1,
        }
    }
};

console.log(deepEqual(a,b)); //true
console.log(deepEqual(firstObject, secondObject)); // true
console.log(deepEqual({a: {b: {c: 1}}}, {a: {b: {c: 1}}})); // true
console.log(deepEqual(c,d)); //false
console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1})); // false
console.log(deepEqual(e,f)); //false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(2, 2)); // true
console.log(deepEqual(1, 2)); // false
console.log(deepEqual(true, false)); // false
console.log(deepEqual(null, 2)); // false


// Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

// Два объекта считаются равными, если у них все свойства одинаковы. 
// В случае, если одно из свойств - само объект, мы сравниваем на равенство эти 
// объекты по тому же алгоритму.