function findAllIdx(arr, value) {
    let indexArr = [];
    for (let i=0; i<arr.length; i++) {
        arr[i] === value ? indexArr.push(i) : '';
    }
    return indexArr;
}

console.log(findAllIdx([1,0,1,0,0,1], 0)) // [1,3,4]
console.log(findAllIdx([1,1], 0)) // []

// Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, 
// у которые значение равно value.