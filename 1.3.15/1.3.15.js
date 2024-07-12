const moveToStart = (arr, n) => {
    let mutatedArr = [];
    if (n < arr.length) {
        let firstPart = arr.slice(arr.length - n, arr.length);
        let secondPart = arr.slice(0, arr.length-n);
        mutatedArr = firstPart.concat(secondPart);
    }
    if (n >= arr.length) {
        mutatedArr = arr.slice(0, arr.length);
    }
    return mutatedArr;
};

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]
// Реализуйте функцию moveToStart, которая принимает массив и число n. 
// Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть 
// возвращен новый массив, порядок элементов которого совпадает с изначальным.

// Функция должна возвращать новый массив, а не мутировать старый.