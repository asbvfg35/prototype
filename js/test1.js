'use strict'
// Глобальные переменные

//Объект функции, NFE

//Функция - объект и значение

let user = {
  d() { },
  g() { }
}
console.log(user.d);

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
// ask('Вопрос?', () => console.log('Вы ответили да'), result => console.log(result));

function sayHi() {
  console.log('Hi');

  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
sayHi();

console.log(`Вызвана '${sayHi.counter}' раз`);


//Свойства функции используются как замыкания

function makeCounter() {
  function counter() {
    return counter.count++;
  };
  counter.count = 0;

  return counter;
}

let counter = makeCounter();
counter.count = 100;
console.log(counter());
console.log(counter());
console.log(counter());


function makeCounter1() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter1 = makeCounter1();

counter1.count = 101;
console.log(counter1()); // 10

//NFE - name function expression : 1ссылается на себя, 2не доступо за пределами функции

let say = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func('Guest');
  }
};

say();

// Задачи функции

//1 установить счетчик,сбросить счетчик, уменьшить счетчик
/*
function makeCounter() {
  let count = 0;

  function counter() {
  return count++;
};
counter.set = function (n) {
   count = n;
};

counter.decrease = function (n) {
  count --; 
}
return counter;
}

let counter = makeCounter();


console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика


console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)
*/
//2 метод преобразования в примитив для функции

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
// console.log(sum(1)(2)(5));

//setTimeout & setInterval
// function set(n, m) {
//   console.log(n + m);
// }
// let time = setTimeout(set, 3000, 3, 4);
// let time1 = setTimeout(() => console.log(4), 4000);

let timerId = setTimeout(() => console.log(2), 3000);
console.log(timerId);


clearTimeout(timerId);
console.log(timerId);


//setInterval

// let timerU = setInterval(() => console.log('tick'), 2000);
//  setTimeout(() => {clearInterval(timerU); console.log('STOP')},3000);

// Рекурсивный setTimeout

// let i = 1;
// setInterval(function () {func(i);},100);
// let i1 = 1;
// setInterval(function run() {
//   func(i);
//   setTimeout(run,100);
// },100);

//setTimeout с нулевой задержкой

setTimeout(() => console.log('мир'));
console.log('Привет');//привет мир

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) console.log(times);

  else setTimeout(run);

});

console.log(1);
//Задачи

//1
function printNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
}

console.log(printNumbers(1, 3));