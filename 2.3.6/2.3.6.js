class Addition {
    constructor (num) {
    	this.num = num;
    }
    
    add (...nums) {
    	const sum = (a, b) => a + b;
    	return this.num + nums.reduce(sum);
    }
};

function logResult (func) {
    return function () {
        console.log('called');
        let res = func.apply(this, arguments);
        return res;
    }
}
Addition.prototype.add = logResult(Addition.prototype.add);

// Addition.prototype.add = function (...args) {
//     console.log('called');
//     const sum = (a, b) => a + b;
//     return this.num + args.reduce(sum);
// }

// Пример:
const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19

// Необходимо добавить возможность логирования в функцию add класса Addition

// Используя прототип класса Addition добавить декоратор к функции add, 
// дающий возможность логировать ее вызов
// При этом результат выполнения add должен быть как и в оригинале, 
// но дополнительно при вызове выводить в консоль 'called'

// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.