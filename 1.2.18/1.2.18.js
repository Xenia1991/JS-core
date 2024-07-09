function capitalize(str){
    const array = str.toLowerCase().split(' ');
    const convertedArray = array.map((word) => {
        return word = word.slice(0,1).toUpperCase() + word.slice(1,word.length);
    })
    return convertedArray.join(' ');
}

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String
// Реализуйте функцию capitalize, которая принимает строку в качестве аргумента 
// и возвращает новую строку, в которой первые буквы слов заглавные, 
// а все остальные - строчные.