const getMostSenior = humans => {
    let ageArr = humans.map((human) => {
        return human.age;
    })
    let maxAge = Math.max.apply(null, ageArr);
    let theMostSenior = humans.filter((human) => {
        return human.age === maxAge;
    })
    return theMostSenior;
};

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

// Дан список информации о людях.

// Необходимо вернуть массив, содержащий самого старшего человека в списке. 
// Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, 
// содержащий их всех.

// Возраст хранится в поле age.