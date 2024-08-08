// ПОКА ОТЛОЖЕНА!!! ВЕРНУСЬ ПОСЛЕ ВСЕХ ОСТАВШИХСЯ 

const users = [
    {id:1, name: 'Alex', age: 70},
    {id:2, name: 'Jane', age: 48},
    {id:3, name: 'Den', age: 20},
    {id:4, name: 'Max', age: 35},
    {id:5, name: 'Anna', age: 25},
    {id:6, name: 'Betta', age: 48},
    {id:7, name: 'Robert', age: 32},
]

class UsersLIbrary {
    constructor (usersObj) {
        this.users = usersObj ;
    }

    getUsersIds (callback) {
        const ids = [2,6,8,3];
        
        setTimeout(() => {
            callback(ids);
        }, 200) 
    }

    getUserInfo (id, callback) {   
        const user = users.map((user) => {
            if (user.id === id) {
                return {};
            }
        });

        setTimeout(() => {
            callback(user)
        }, Math.random()*200)
    }
}

const db = new UsersLIbrary(users);

const { getUserInfo, getUsersIds } = db;

function getUsersInfo(onLoad) {

};


getUsersIds((ids) => {
    console.log(ids); // ['id2', 'id6']
});
  
getUserInfo(4, (userInfo) => {
    console.log(userInfo); // { name: 'Alex', age: 70 }
});
  
// Вам нужно написать функцию, которая получает массив всех пользователей и передает 
// его в функцию коллбэк.

// Пример использования

// getUsersInfo((users) => {
//   console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
// });

// Для получения данных вам предоставлены 2 асинхронные функции
// getUsersIds - Возвращает массив с идентификаторами пользователей
// getUserInfo - Возвращает данные пользователя по заданному идентификатору

// Функция должна вызвать callback, переданный первым агрументом и передать 
// туда массив данных о пользователях.

// Порядок пользователей в результирующем массиве должен соответствовать порядку 
// идентификаторов в массиве из getUsersIds

// Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего 
// хранилица данных.
