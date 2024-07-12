const areBracketsBalanced = (str) => {
    if (str.length === 0) {
        return true;
    }

    if (str[0] === ')') {
        return false;
    } 

    let stack = [];
    for (let bracket of str) {
        if (bracket === '(') {
            stack.push(bracket);
        } else if (bracket === ')' && stack.length === 0 ||
                   stack.length !==0 && stack[stack.length -1] === ')'
        ) {
            stack.push(')');
        } else {
            stack.pop('(');
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(areBracketsBalanced('()()()()()')); //true
console.log(areBracketsBalanced(')))(())))))(()')); //false
console.log(areBracketsBalanced('((((((()))))))'));  //true
console.log(areBracketsBalanced(''));  //true
console.log(areBracketsBalanced('(())())')); //false
console.log(areBracketsBalanced('(()(()))))')); //false

// Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих 
// и закрывающих круглых скобок, и проверяет является ли эта строка корректной. 
// Пустая строка (отсутствие скобок) считается корректной.

// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная 
// структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая 
// ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.