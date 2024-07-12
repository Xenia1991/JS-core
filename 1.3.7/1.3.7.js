const arithmetic = (a, b, operator) => {
    switch (operator) {
        case "add": return a+b;
        break;
        case "subtract" : return a-b;
        break;
        case "divide" : return a/b;
        break;
        case "multiply" : return a*b; 
        break;
        default: return NaN;
    }
};

console.log(arithmetic(5, 2, "add"));      //=> returns 7
console.log(arithmetic(5, 2, "subtract")); //=> returns 3
console.log(arithmetic(5, 2, "multiply")); //=> returns 10
console.log(arithmetic(5, 2, "divide"));   //=> returns 2.5
console.log(arithmetic(5, 2, "aaa"));      //=> returns NaN

// Реализуйте функцию, которая принимает на вход два числа и арифметический оператор 
// (имя которого в виде строки) и возвращает результат соответстующей операции.

// Первые 2 аргумента это положительные целые числа

// Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

// В случает если оператор некорректен, функция должна возвращать NaN
