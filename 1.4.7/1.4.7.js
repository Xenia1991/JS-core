function partition (array, callback) {
    let trueArray = [];
    let falseArray = [];
    let result = [trueArray, falseArray];
    for (element of array) {
        if (callback) {
            Boolean(callback(element)) === true ? trueArray.push(element) : falseArray.push(element);
        } else {
            Boolean(element) === true ? trueArray.push(element) : falseArray.push(element);
        }
    }
    return result;
};

const numbers = [1,2,3,4,5,6];
console.log(partition(numbers, (element) => element > 3));
// [ 
//     [4, 5, 6], // trueArray 
//     [1, 2, 3]  // falseArray
// ];

const numbers1 = [0, 1, 2, {}, false, "", "0"];
console.log(partition(numbers1, (element) => element));
// [ 
//     [1, 2, {}, "0"], // trueArray 
//     [0, false, ""]  // falseArray
// ];

const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];  
console.log(partition(users, (element) => element.active ));
// [
//     [  
//         { 'user': 'fred',    'age': 40, 'active': true }
//     ],
//     [  
//         { 'user': 'barney',  'age': 36, 'active': false },
//         { 'user': 'pebbles', 'age': 1,  'active': false }
//     ] 
// ]

// Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, 
// а возвращает массив в котором два массива.

// partition(array, callback) => [trueArray, falseArray]
// Во время выполнения функция должна вызвать callback для каждого элемента массива array.

// Сигнатура функции callback

// callback(element) => boolean
// element - Элемент массива на котором была вызвана функция callback

// Если callback вернёт true то element с которым была вызвана функция 
// должен попасть в массив trueArray

// Если callback вернёт false то element с которым была вызвана функция 
// должен попасть в массив falseArray

// Функция должна правильно отрабатывать если callback возвращает приводимые 
// к true false значения:

// Приводимые к true
// {} => true
// 1 => true
// ...
// совокупность таких значений называется truthy

// Приводимые к false
// undefined => false
// "" => false
// 0 => false
// ...
// совокупность таких значений называется falsey 
// Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray