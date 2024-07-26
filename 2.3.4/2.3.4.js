function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null;
}  
// доступна ли книга для выдачи или она у кого-то на руках
Book.prototype = {
    // должен выдавать книгу читателю, если она доступна для выдачи и 
    // записывать его имя в reader, возвращает true, если выдача книги возможна 
    // и она произведена, false, если книга уже выдана
    isAvailable: function () {
        return this.reader === null ? true : false;
    },
    // должен выдавать книгу читателю, если она доступна для выдачи и 
    // записывать его имя в reader, возвращает true, если выдача книги возможна 
    //  и она произведена, false, если книга уже выдана
    takeBook: function (readerName) {
        if (this.isAvailable()) {
            this.reader = readerName;
            return true;
        } else {
            return false;
        }
    },
    // регистрирует возврат книги, устанавливает reader в null, возвращает true, 
    // если книга была на руках, false если книга итак в библиотеке
    returnBook: function () {
        if (!this.isAvailable()) {
            this.reader = null;
            return true;
        } else {
            return false;
        }
    },
    // изменяет название книги на newBookName, возвращает true/false, 
    // в зависимости от результата
    changeBookName: function (newBookName) {
        this.name = newBookName;
        return this.name === newBookName ? true : false;
    },
    // изменяет имя автора на newAuthorName, возвращает true/false 
    // в зависимости от результата
    changeAuthorName : function (newAuthorName) {
        this.author = newAuthorName;
        return this.author === newAuthorName ? true : false;
    },
    // возвращает имя текущего читателя или null, если книга доступна для выдачи
    getCurrentReader: function () {
        if (!this.isAvailable()) {
            return this.reader;
        } else {
            return null;
        }
    }
}

// Реализуйте функционал для работы с книгами в библиотеке:

// создание книги(добавление новой книги в библиотеку)
// Выдача книги читателю
// Получение книги от читателя
// Получение у кого книга сейчас находится
// Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

// name - имя книги
// author - имя автора
// year - год книги
// reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null

// Необходимо реализовать на прототипе следующие методы работы с книгой:

const book1 = new Book('Капитанская дочь', 'А.С.Пушкин', '1975');
console.log(book1);
console.log(book1.takeBook('Elena Ivanova'));
console.log(book1);
console.log(book1.isAvailable());
console.log(book1.returnBook());
console.log(book1);
console.log(book1.changeBookName('War & peace'))
console.log(book1);
console.log(book1.changeAuthorName('Lev Tolstoy'));
console.log(book1);
console.log(book1.takeBook('Dima Semenov'));
console.log(book1);
console.log(book1.isAvailable());
console.log(book1.getCurrentReader());
console.log(book1.returnBook());
console.log(book1);
console.log(book1.isAvailable());
console.log(book1.getCurrentReader());
console.log(book1 instanceof Book);
console.log(Book.prototype.hasOwnProperty('isAvailable'));