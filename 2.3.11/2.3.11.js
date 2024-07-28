class Calc {
    constructor (prop = 0) {
        this.counter = prop;
    }
    add (num) {
        return new Calc(this.counter + num);
    }
    sub (num) {
        return new Calc(this.counter - num);
    }
    result() {
        return this.counter;
    }
}
// var createFunc = function(param){
// 	var closureParam = param;
// 	// замыкание
// 	var returnedFunc = function(){alert(closureParam);}
// 	return returnedFunc;
// }

const calc = new Calc();
console.log(calc);
console.log(calc.result()); // 0
console.log(calc.add(5).result()); // 0 + 5 = 5
console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7

const ten = calc.add(10);
console.log(ten.sub(5).result()); // 10 - 5 = 5
console.log(ten.result()); // 10

// Реализовать класс Calc с методами sub / add / result

// В конструкторе можем передать начальное иммутабельное значение (поумолчанию 0), 
// потом методами add и sum прибавлять и вычитать из него.
// Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают 
// новый объект класса.
// По вызову result() получаем результат вычислений.