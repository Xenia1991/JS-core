function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (let prom of promises) {
            prom.then((res) => resolve(res))
                .catch((err) => reject(err)) 
        }
    })
}

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
);
  
const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);
  
const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);
  
console.log(promiseRace([firstPromise, secondPromise, thirdPromise])); // 100


// Напишите функцию, которая принимает массив промисов и возвращает результат того, 
// который завершился первым. 
// При этом если первый промис выдал ошибку - необходимо вернуть ее.

//    ✕ должна возвращать результат первого выполнившегося промиса (7ms)
//    ✕ должна прокидывать ошибку (2ms)
//    ✓ не должна вызывать Promise.race стандартной библиотеки (1ms)