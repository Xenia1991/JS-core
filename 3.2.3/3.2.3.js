
const counters = {
    bannerClick: 5,
}
localStorage.setItem('counters', JSON.stringify(counters));
function incrementCounter(counterName){
    try {
        const counters = JSON.parse(localStorage.getItem('counters'));

        if (counters[counterName] === undefined) {
            counters[counterName] = 1;
        } else {
            counters[counterName] += 1;
        };

        localStorage.setItem('counters', JSON.stringify(counters));

        const newInfoFromLocal = JSON.parse(localStorage.getItem('counters'));
        return newInfoFromLocal[counterName];

    } catch (error) {
        const counters = {
            [counterName]: 1,
        };
        localStorage.setItem('counters', JSON.stringify(counters));
        const newInfoFromLocal = JSON.parse(localStorage.getItem('counters'));
        return newInfoFromLocal[counterName];
    }
}

// в localStorage 1 счетчик: bannerClick = 5
incrementCounter('bannerClick'); // 6
incrementCounter('bannerClick');//7
incrementCounter('bannerClose'); // 1
incrementCounter('bannerClose'); // 2
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1

// В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена 
// счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, 
// которой на вход первым параметром передаётся counterName - имя счётчика.

// Задача функции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. 
// В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, 
// в этом случае функция должна записывать новые данные, где у указанного счетчика будет 
// значение 1. В конце функция должна возвращать значение счетчика после инкремента.