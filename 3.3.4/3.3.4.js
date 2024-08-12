const { getUserInfo, getUsersIds } = db;

function getUsersInfo(onLoad) {
    getUsersIds((ids) => {
        if (ids.length === 0) {
            return onLoad([])
        }
        let usersInfo = new Array(ids.length)
        ids.forEach((id, index) => {
            getUserInfo(id, info => {
                usersInfo[index] = info
                if (index === ids.length - 1) {
                    return onLoad(usersInfo)
                }
            })
        })
    })
}


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
