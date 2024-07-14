function getStringCount(object) {
    let stringCount = 0;
    if (typeof (object) === 'object' && object !== null) {
        for (let key in object) {
            typeof (object[key]) === 'string' ? stringCount++ : stringCount +=getStringCount(object[key]);
        }
    }
    return stringCount;
}

// Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна 
// принимать массив или объект и считать количество строк в массиве / значениях 
// объекта с учетом вложенности.

console.log(getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
})); // 3

console.log(getStringCount(['1', '2', ['3']])) // 3
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно 
// функцию getStringCount