const reverseLongWords = (str) => {
    const splittedArr = str.split(' ');
    const reversed = splittedArr.map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        } else {
            return word;
        }
    })
    return reversed.join(' ');
};

console.log(reverseLongWords('Hey fellow warriors')); // Hey wollef sroirraw
console.log(reverseLongWords('This is a test')); // This is a test
console.log(reverseLongWords('This is another test')); // This is rehtona test

// Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, 
// в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.