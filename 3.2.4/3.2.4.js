class AttemptsLimitExceeded extends Error {
    constructor(){
      super('Max attempts limit exceed');
      this.name = 'AttemptsLimitExceeded';
    }
}
  
class NotFoundError extends Error {
    constructor(){
      super('Not found');
      this.name = 'NotFoundError';
    }
}
  
class TemporaryError extends Error {
    constructor(){
      super('TemporaryError');
      this.name = 'TemporaryError';
    }
}
  
function getRepeatableData(getData, key, maxRequestsNumber) {
   try {
        if (maxRequestsNumber === 0) { 
            throw new AttemptsLimitExceeded();
        } 
        return getData(key);
   } catch (error) {
        if (error.name === 'NotFoundError') {
            throw error;
        }
        if (error.name === 'TemporaryError') {
            return getRepeatableData(getData, key, maxRequestsNumber-1);
        }
        if (error.name === 'AttemptsLimitExceeded') {
            throw error;
        }
    }
    return key;
}

const getData = (key) => 'hello' + key;
const res = getRepeatableData(getData, '1', 3); // 'hello1'
console.log(res);


// Написать функцию getRepeatableData, котрая принимает на вход три параметра:

// getData- функция, возвращающая данные со стороннего источника. 
//           Может генерировать ошибки (см ниже)
// key - аргумент, с которым нужно вызвать getData
// maxRequestsNumber- максимальное количество вызовов getData функции. 
//                    Если этот параметр отсутствует - повторяем бесконечное количество раз.
// Функция getRepeatableData должна вызывать getData и обрабатывать ошибки по условию:

// Если вызов getData возвращает ошибку NotFoundError, то мы пробрасываем исключение.

// Если вызов getData возвращает ошибку TemporaryError, то мы должны делать повторный 
// вызов getData функции. Кол-во таких вызовов не должно превышать значение maxRequestsNumber. 
// Если кол-во повторого вызыва превышает maxRequestsNumber, то функция getRepeatableData 
// должна пробрасывать ошибку AttemtsLimitExceeded.

// Если getData выполняется без ошибок - функция должна вернуть то, что вернула getData. 