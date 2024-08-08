function promiseAll(promises) {
    return new Promise((resolve) => {
        const results = []
        let rest = promises.length
        if (rest === 0) {
          resolve(results)
        }
        promises.forEach((promise, index) => {
          promise
            .then((result) => {
              results[index] = result
              rest -= 1
              if (rest === 0) resolve(results)
            })
        })
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
  
console.log(promiseAll([firstPromise, secondPromise, thirdPromise])
      .then(console.log)); // [300, 200, 100]

// Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив 
// результатов вызова этих промисов.