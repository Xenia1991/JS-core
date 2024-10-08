const hasArrays = (arr) => {
   for (let element of arr) {
      if (Array.isArray(element)) {
        return true;
      }
   }
   return false;
};

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); // true

const data2 = [];
console.log(hasArrays(data2)); // false

// Реализуйте функцию hasArrays, которая принимает массив данных разных типов 
// и возвращает true, если этот массив содержит массив внутри себя. 
// Если нет, функция должна вернуть false.