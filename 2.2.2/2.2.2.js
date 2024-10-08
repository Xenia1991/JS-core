function invert (obj) {
    let reverseArr = Object.entries(obj).map((element) => element.reverse());
    let reversedObj = Object.assign({},Object.fromEntries(reverseArr));
    return reversedObj;
}

// Напишите функцию, которая создает объект, состоящий из инвертированных ключей и 
// значений объекта.

// Если объект содержит повторяющиеся значения, последующие значения перезаписывают 
// присвоения свойств предыдущих значений.

// Пример:
console.log(invert({ a: 1, b: 2, c: 3 })) // { 1: a, 2: b, 3: c }