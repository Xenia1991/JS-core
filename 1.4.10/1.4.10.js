const once = fn => { 
    let a = 0;
    return function () {
        a++;
        if (a===1) {
            fn();
        }
    }
};

const f = () => console.log('hi!');
const onceF = once(f);
onceF(); // hi!
onceF(); // nothing

// Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает 
// новую функцию, которая вызывает функцию-аргумент, но только единожды. 
// Повторный вызов функции-результата once не должен давать никакого эффекта.