let counter = 0;
const fn = () => {
  counter++;
  console.log(counter);
  
};

function throttle (fn, throttleTime) {
    let isThrottled = false;
    function wrapper () {
        if (isThrottled) {
            return;
        }
        fn.apply(this, arguments);
        isThrottled = true;

        setTimeout(()=> {
            isThrottled = false;
        }, throttleTime)
    }
    return wrapper;
}

const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

console.log(counter); // 3