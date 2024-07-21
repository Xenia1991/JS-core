function optionalChaining (obj, chain) {
    for (let i=0; i < chain.length; i++) {
        for (let key in obj) {
            if (chain[i] === key && chain.length === 1) {
                return obj[key];
            } else if (chain[i] === key) {
                return optionalChaining(obj[key], chain.slice(i+1, chain.length));
            }      
        }
        return undefined;
    }
}

// Напишите функцию, которая принимает первым параметром объект, 
// вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

// Если какое-то из свойств не найдено - функция возвращает undefined.

// Пример:

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
};
console.log(optionalChaining(obj, ["a", "b", "c", "d"])); // Привет
console.log(optionalChaining(obj, ["a", "b", "c", "d", "e"])); // undefined

console.log(optionalChaining(obj, ["a", "c", "d"])); // undefined
console.log(optionalChaining(obj, ["b", "d", "a"])); // undefined