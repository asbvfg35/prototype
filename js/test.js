'use strict';

console.dir(function () { });

function f() { }
console.log(f.__proto__ == Function.prototype);
console.log(f.__proto__.__proto__ == Object.prototype);
let obj = {

};
console.log(obj.__proto__);
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// модифицирует rabbit.isSleeping
rabbit.sleep();
animal.sleep();
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)»

animal = {
  eats: true,
};
rabbit = {
  jumps: true,
  __proto__: animal
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`our ${prop}`);
  } else {
    console.log(`Inherited ${prop}`);
  }
}
rabbit.r = 'erty';
console.log(Object.keys(rabbit));
console.log(Object.values(rabbit));

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};
console.log(pockets.pen);

//2

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = food;
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

let animal1 = {
  eats: true
};

function Rabbit1(name) {
  this.name = name;
}

Rabbit1.prototype = animal1;

rabbit = new Rabbit1("White Rabbit");

console.log(rabbit);


animal = {
  eats: true
};
console.log(animal);
function Rabbit(name) {
  this.name = name;
}
console.log(Rabbit.prototype);
Rabbit.prototype = animal;
console.log(Rabbit);
rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit); // true

function V() { }
let v = new V();
console.log(v);
console.log(v.constructor == V);

function Y(name) {
  this.name = name;
  console.log(name);
}

let y = new Y("Kolia");

let y1 = new Y("Vasia");



function Rabbit() { }
Rabbit.prototype = {
  eats: true
};

let rab = new Rabbit();
console.log(rab); //
delete rab.eats;
// Rabbit.prototype = {};
console.log(rab.eats);
// Rabbit.prototype.eats = false;
console.log(rab.eats);

function R() { }
console.log(R);
R.prototype = {};
obj = new R();
console.log(constructor);
console.log(obj);

let obj2 = new obj.constructor();
console.log(obj2);

