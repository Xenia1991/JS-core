const sum = (...rest) => {
    if (rest.length === 0) {
        return 0;
    }
    const sum = rest.reduce((ac, element) => Number(element) && !isNaN(element) ? ac += Number(element) : ac, 0)
    return sum;
};

// const sum = (a,...rest) => {
//     if (a === undefined || rest === undefined) {
//         return 0;
//     } 
//     let numberedRest = rest.filter((element) => {
//         return Number(element) && !isNaN(element);
//     });
//     if (!isNaN(a)) {
//         return Number(a) + numberedRest.reduce((a, i) => a + Number(i), 0);
//     } else {
//         return numberedRest.reduce((a, i) => a + Number(i), 0);
//     }
// };

console.log(sum(1, 2, 3, 4, 5, 6),); // 21
console.log(sum(-10, 15, 100),); // 105
console.log(sum(),); // 0
console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),); // 11
console.log(sum(NaN, undefined, 'fwqf', {})); //0
console.log(sum(NaN, undefined, null, 'fwqf', true, {}, 22)); //23
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 'fqwf', {})); //3
console.log(sum(1, 2, -3, 5)); //5
console.log(sum(NaN, undefined, 'fwqf', {})); //0
// Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов 
// и возвращает их сумму. Вызов функции без аргументов должен вернуть 0. В случае, если аргумент 
// не является числом и не может быть приведен к таковому, нужно проигнорировать его. 
// Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.