class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(eventName, callback) {
        if (this.event[eventName] === undefined) {
            this.event[eventName] = [callback];
        } else {
            this.event[eventName].push(callback);
        };
    }

    off(eventName, callback) {
        this.event[eventName] = this.event[eventName].filter((eventCallback) => {
            return callback !== eventCallback
        })
    }

    once(eventName, callback) {
        this.event[eventName] = this.event[eventName] || [];
        const onceEvent = () => {
            callback();
            this.off(eventName, onceEvent);
        }
        this.event[eventName].push(onceEvent);
        return this;
    }

    emit(eventName, args) {
        const event = this.event[eventName];
        return event.forEach((func) => console.log(func(args)));
    }
}

class BroadcastEventEmitter extends EventEmitter {
    emit(event = '*', arg) {
        if (event = '*') {
           const events = Object.keys(this.event);
           console.log(events);
           events.forEach((event) => {
                this.event[event].forEach(((func) => console.log(func(arg))))
           })
        }
    }
}

// Пример #1:

let input = document.querySelector('input');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

let emitter = new EventEmitter();

emitter.on('event:name-changed', data => {
  h1.innerHTML = `New value is: ${data.name}`;
});

/*
подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. 
Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка 
при возникновении этого события.
*/

// button.addEventListener('click', () => {
//   emitter.emit('event:name-changed', {name: input.value});
// });
/*
добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
*/


// Пример #2:


let emitter1 = new EventEmitter();

const multiplyTwo = (num) => num * 2;
const multiplyThree = (num) => num * 3;

const divideTwo = (num) => num / 2;
const divideThree = (num) => num / 3;

// Добавляем для события multiplication два обработчка
emitter1.on('multiplication', multiplyTwo);
emitter1.on('multiplication', multiplyThree);

// Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
emitter1.emit('multiplication', 2);
// -> 4
// -> 6

// Удалим обработчик multiplyThree для события multiplication
emitter1.off('multiplication', multiplyThree);

// Еще раз вызываем событие multiplication, теперь срабатывает только один обработчик multiplyTwo
emitter1.emit('multiplication', 2);
// -> 4

// Создадим новое событие divideTwo и добавим два обработчика:
// divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
//  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
emitter1.on('division', divideTwo);
emitter1.once('division', divideThree);

// Вызываем событие division - срабатывают обработчики divideTwo и divideThree
emitter1.emit('division', 6);
// -> 3
// -> 2

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
emitter1.emit('division', 6);
// -> 3

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
emitter1.emit('division', 6);
// -> 3

let broadcastEmitter = new BroadcastEventEmitter();

broadcastEmitter.on('multiplication', multiplyTwo);
broadcastEmitter.on('multiplication', multiplyThree);
broadcastEmitter.on('division', divideTwo);
broadcastEmitter.on('division', divideThree);

// Вызываем все события (multiplication и division) => все обработчики для всех событий будут вызваны.
// Для события multiplication - вызовутся обработчики multiplyTwo и multiplyThree.
// Для события division - вызовутся обработчики divideTwo и divideThree.
broadcastEmitter.emit('*', 6);
// -> 12
// -> 18
// -> 3
// -> 2
// Транслятор событий
// Cоздайте класс EventEmitter для управления событиями. 
// У этого класса должны быть следующие методы:

// .on(event, callback) - добавить обработчик события

// .off(event, callback) - удалить обработчик события

// .once(event, callback) - добавить обработчик события, который сработает единожды

// .emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

// Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать 
// все обработчики всех событий:
// emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
// Event Emitter можно перевести как “транслятор” событий.

// Представьте себе такую ситуацию: происходит какое-то событие, например пользователь 
// кликнул на кнопку, на которое должны отреагировать разные участки программы. 
// Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно 
// реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для 
// управления событиями и реализовать возможность любым элементам “подписаться” на него 
// (и быть в курсе происходящего).