const arr = [1,2,4,true, 78];


let func = function (a, b, ...other) {
    console.log(a, b, other);
};

const extraArr = [false, 'hi', 'wow']
const anotherArr = [...arr, 66, ...extraArr];



const obj1 = {
    name: 'ruby',
    year: 1888,
}

const obj2 = {
    country: 'UK',
    author: 'Doyle',
}

const ff = Object.assign(obj1, obj2);
console.log(ff===obj1);
console.log(obj1);



