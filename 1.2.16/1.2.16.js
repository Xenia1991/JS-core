function compareWithPrecision(a, b, precision) {
    let difference = b-a;
    if (difference < 0) {
        difference = -difference;
    }
    if (difference.toFixed(4) <= precision ) {
        return true;
    }
    return false;
};

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001)); // true
// Напишите функцию, которая сравнивает два числа с определенной погрешностью.