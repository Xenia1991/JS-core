function sequenceSum (begin, end) {
    if (begin === undefined && end === undefined) {
        return NaN;
    }

    if (begin === end) {
        return end;
    }

    if (begin > end) {
        return NaN;
    }

    let sum = 0;
    if (begin < end ) {
        sum = begin + sequenceSum(begin+1, end);
    } else {
        sum = sum + begin;
    }

    return sum;
}

// Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел. 
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3

// Подсказки

// Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел 
// такой последовательности не представляется возможным, в этом случае возвращаем NaN.
// Сумма чисел последовательности, в которой begin === end, равна begin (или end).

console.log(sequenceSum(7, 2)); // NaN (т.к. это "пустая" последовательность)
console.log(sequenceSum(0, 0)); // 0 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(6, 6)); // 6 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum()); // NaN

// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию sequenceSum