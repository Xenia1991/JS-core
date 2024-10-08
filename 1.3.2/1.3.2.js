const lettersCount = (str) => {
    let letterArray = str.toLowerCase().split('');
    let letterObj = {};
    for (let letter of letterArray) {
        if (letterObj[letter] === undefined) {
            letterObj[letter] = 1;
        } else {
            letterObj[letter] +=1;
        }
    }
    return letterObj;
};

console.log(lettersCount('aAAbbccde'));
                                        // {
                                        //    a: 3,
                                        //    b: 2,
                                        //    c: 2,
                                        //    d: 1,
                                        //    e: 1,
                                        // }
// Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и 
// возвращает объект, в котором ключами являются все буквы, которые есть в строке, 
// а значениями - их количество в строке.

// Перед подсчетом буквы необходимо привести к нижнему регистру. 
// Большая буква и маленькая должны считаться одинаковой буквой.