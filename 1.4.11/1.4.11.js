const inRange = (a, b) => {
    const result = function (el) {
        if (b>=a) {
            return Number(el)>=a && Number(el)<=b;
        } 
    } 
    return result;
};

const inArray = arr => {
    const result = function (el) {
        return el=arr.includes(el);
    } 
    return result;
};

const notInArray = arr =>  {
    const result = function (el) {
        return el=!arr.includes(el);
    } 
    return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]

// Для этой задачи вам нужно будет ознакомиться с методом массива filter, 
// который принимает функцию-коллбэк для фильтрации массива.

// Реализуйте набор готовых к использованию функций для arr.filter:

// inRange(a, b) – число находится между a и b (включительно).
// Если аргумент или элемент массива можно привести к числу,
// то функция должна сначала приводить его к числу, а потом проверять условие.
// Если a > b, то функция должна возвращать false для всех элементов массива

// inArray([...]) – значение находится в данном массиве.

// notInArray([...]) – значение не находится в данном массиве.

// Они должны использоваться таким образом:

// arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).

// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из 
// элементов массива

// arr.filter(notInArray([1,2,3])) – выбирает только те элементы,
// которые не совпадают ни с одним из элементов массива