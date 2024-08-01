function arrayToCsv(data) {
    try {
        const newData = data.map((element) => {
            let arr = element.map((inner) => {
                if (typeof inner === 'number' || typeof inner === 'string') {
                    if (typeof inner === 'string' && inner.indexOf(',') !== -1) {
                        return `"${inner}"`;
                    } else if (typeof inner === 'string' && inner.indexOf('"') !== -1) {
                        let checkedArray = inner.split(' ').map((el) => {
                            return el.indexOf('"') !== -1 ? `"${el}"` : el;
                        });
                        return `"${checkedArray.join(' ')}"`;
                    }else {
                        return inner;
                    }
                } else {
                    throw new Error('Unexpected value');
                }
            });
            return arr;
        });
        const arrForString = newData.map(element => `${element}`);
        return arrForString.join('\n');
    } catch (error) {
        throw error;
    }  
}

console.log(arrayToCsv([[1, 2], ['a', 'b']])) // '1,2 
                                              //  a,b';
console.log(arrayToCsv([[1, 2], ['a,b', 'c,d']])) // '1,2 
                                                  // "a,b","c,d"'
const data1 = [['"text"', 'other "long" text']];
console.log(arrayToCsv(data1)); //'"""text""","other ""long"" text"'
// Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и 
// возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

// Допустимые значения в качестве элементов массива - числа и строки 
// Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

// Функция принимает: data - массив массивов, содержашие числа или строки

// Функция возвращает: Строку в формате CSV