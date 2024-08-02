class ExecutionError extends Error {
    constructor (arg, stack) {
        super();
        this.arg = arg;
        this.stack = stack;
    }

    getArgData () {    
        return this.arg;
    }
}

function applyFn(dataArr, callback) {
    const resultObj = {
        succeeded: [],
        errors: [],
    };
    const { succeeded, errors } = resultObj;   
    for (let arg of dataArr) {
        try {
            succeeded.push(callback(arg));
        } catch (error) {
            errors.push(new ExecutionError(arg, error.stack));
        }
    }  
    return resultObj;
}

// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],
// console.log({ succeeded, errors });


const dataArr = ['{"login":"login","password":"password"}', '{{}'];
const callback = JSON.parse;
const { succeeded, errors } = applyFn(dataArr, callback);
console.log({ succeeded, errors });

//   succeeded: [{ login: 'login', password: "password" }],
//   errors: [ExecutionError],

console.log(errors[0].getArgData()); // '{{}'

// Написать функцию applyFn, которая принимает на вход 2 параметра:

// Массив с входными данными
// Функцию, которую нужно применить к каждому элементу массива входных данных 
// applyFn(dataArr, callback);
// Функция должна возвращать объект в котором 2 массива массив результатов succeeded 
// и массив ошибок errors с правильными call stacks

// {
//   succeeded: [...], // Массив данных после функции обработчика, как при вызове .map
//   errors: [...],    // Массив инстансов ExecutionError
// }

// Создать класс ошибки ExecutionError с методом .getArgData(), по которому можно 
// получить входные данные, на которых упала функция-коллбэк, то есть возвращать 
// element входного массива dataArr, если вызов callback(element) сгенерирует ошибку

// Стек трейс должен указывать на корректную позицию в функции-коллбэке 
// Примечание: класс ExecutionError нужно сделать наследником другого класса