async function promisesInSeries(asyncFns) {
   let res = undefined;
   for (let fn of asyncFns) {
        res = await fn(res);
   }
   return res;
}

const firstPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(300), 300));
  
const secondPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(200), 200));
  
const thirdPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(100), 100));
  
console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise])); 
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс

// Напишите функцию, которая принимает массив асинхронных функций и последовательно
// (следующая начинается, когда закончилась предыдущая) вызывает их, передавая в 
// аргументы результат вызова предыдущей функции.