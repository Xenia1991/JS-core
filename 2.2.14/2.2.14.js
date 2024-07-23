const getDaysBetweenDates = (date1, date2) => {
    if(date1===undefined || date2===undefined) {       
        throw new TypeError('TypeError');
    }

    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const ms1 = firstDate.getTime();
    const ms2 = secondDate.getTime();
    const hours1 = ms1/1000/3600;
    const hours2 = ms2/1000/3600;

    if (hours2 > hours1) {
        return Math.floor((hours2-hours1)/24);
    } else if (hours1 > hours2 && hours1-hours2<24)  {
        return 0;
    } else if (hours1 === hours2) {
        return 0;
    }else {
        return -(Math.floor((hours1-hours2)/24));
    }
};

// Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает 
// количество полных дней между ними.

console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1

// Функция должна корректно работать с объектом Date
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366

// Функция должна корректно работать со значениями в миллисекундах
console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1

// Если входные параметры - невалидные даты, то функция вовращает NaN:
console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN

// Если дата вторая меньше первой
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2010, 6, 2, 6, 0)));

// Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
console.log(getDaysBetweenDates(null)); // -> TypeError

// new Date(null) - валидная запись, которая вернёт количество миллисекунд, 
// прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time