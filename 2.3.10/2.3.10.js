class Person {
    constructor (firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const birthDay = new Date(this.dateOfBirth).getDate();
        const birthMonth = new Date(this.dateOfBirth).getMonth();
        const birthYear = new Date(this.dateOfBirth).getFullYear();
        const nowDay = new Date('2019-05-23').getDate();
        const nowMonth = new Date('2019-05-23').getMonth();
        const nowYear = new Date('2019-05-23').getFullYear();
        let age;
        if (birthMonth === nowMonth && birthDay > nowDay) {
            age = nowYear - birthYear -1;
        } else {
            age = nowYear - birthYear;
        }
        return age;
    }
}

class Account {
    constructor (person, bankAccount) {
        this.person = person;
        this.bankAccount = bankAccount;
        this.history = [];
    }

    addMoney(amount, description) {
        this.bankAccount += amount;
        this.description = description;
        let operation = {
            timestamp: new Date().getTime(),
            target: 'in',
            amount,
            description,
        };
        this.history.push(operation);
        return this.bankAccount, this.description;
    }

    withdrawMoney (amount, description) {
        this.bankAccount -= amount;
        this.description = description;
        let operation = {
            timestamp: new Date().getTime(),
            target: 'out',
            amount,
            description,
        };
        this.history.push(operation);
        return this.bankAccount, this.description;
    }

    getAmount() {
        return this.bankAccount;
    }

   getAccountHistory () {
        return this.history;
   }

   static transfer (fromAccount, toAccount, amount) {
        fromAccount.bankAccount -=amount;
        toAccount.bankAccount += amount;
        let operation;
        if (fromAccount) {
            operation = {
                timestamp: new Date().getTime(),
                target: 'out',
                amount: amount,
                description: `Перевод со счета`,
            }
        }
        fromAccount.history.push(operation);
        if (toAccount) {
            operation = {
                timestamp: new Date().getTime(),
                target: 'in',
                amount: amount,
                description: `Перевод на счет`,
            }
        }
        toAccount.history.push(operation);
        return this.bankAccount;
   }
}

// Личный Счет
// Создайте 2 класса - 
    // Person для описания клиента и 
    // Account для работы с банковским счетом частного лица.
// Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

// Person
// const person = new Person('Johannes', 'Helms', '1983-01-02');

// Методы
// getAge() - Возвращает возраст владельца счета

// Свойства
// firstName - Имя
// lastName - Фамилия
// fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)

// Account
// new Account(person, 1000);

// Методы
// addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
// withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
// getAmount() - Получить текущее состояние счета
// getAccountHistory() - Возвращает массив с объектами формата 
                       //{ timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. 
                       //Поле target может иметь значения in или out.
// transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой

// Свойства
// person - Владелец счета

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
console.log(alex);
console.log(alex.getAge());
const alexAccount = new Account(alex, 1000);
console.log(alexAccount);
const helen = new Person('Helen', 'Smith', '1990-06-06');
console.log(helen);
console.log(helen.getAge());
const helenAccount = new Account(helen, 400);
console.log(helenAccount);

// console.log(alexAccount.addMoney(1000, 'Зарплата'));
// const amount = alexAccount.getAmount();
// console.log(amount);
// console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
// Account.transfer(alexAccount, helenAccount, 100);
// console.log(helenAccount.getAmount()); // 500 , 400 до перевода
// console.log(alexAccount.getAmount()); // 1700, 1800 до перевода
// console.log(alexAccount.getAccountHistory());
// console.log(helenAccount.getAccountHistory());
// console.log(Account.transfer(alexAccount, helenAccount, 500));
// console.log(alexAccount.getAccountHistory());
// console.log(helenAccount.getAccountHistory());
// console.log(alexAccount.getAmount());
// console.log(helenAccount.getAmount());