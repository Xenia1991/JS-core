function isEmpty(obj) {
    for (let key in obj) {
        return obj.hasOwnProperty(key) ? false : true;
    }
    return true;
};

function isEmptyWithProtos(obj) {
    let result = true;

    for (let key in obj) {
        if (key) {
            return result = false;
        } 
    }
    return result;
};

// Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, 
// не у прототипов), иначе возвращает false.

const obj = Object.create(null);
console.log(isEmpty(obj)); // -> true
console.log(isEmpty({ prop: 'value' })); // -> false
console.log(isEmpty({ name: 'Den', age: 20})); // -> false

// Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его 
// прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj1 = Object.create(protoObj);
console.log(isEmptyWithProtos(obj1)); // -> true
console.log(isEmptyWithProtos({})); // -> false

// Обрати внимание на то, что функция isEmptyWithProtos проверяет наличие свойств не только 
// у самого объекта, но и у его прототипов. Если создать пустой объект литерально 
// (просто через фигурные скобки как в примере {}) то у такого объекта автоматически будет 
// прототип Object. Поэтому isEmptyWithProtos возвращает false для таких объектов.