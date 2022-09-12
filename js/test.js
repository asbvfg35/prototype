"use strict";

let obj = {};
console.log(obj);
// alert(obj);
let arr = [1, 2, 3];
console.dir(arr);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

function f() { }
console.log(f);
console.log(f.__proto__);
console.log(f.__proto__.__proto__);
console.log(f.__proto__.__proto__.__proto__);

let y = {
  null: 5,
  undefined: 100000
};
console.log(y.null);
console.log(y.undefined);


String.prototype.show = function () {
  console.log(this);
};
'Boom emgf'.show();

if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
}

console.log("ga".repeat(3));


console.log(null === null);

let gh = {
  0: 0,
  1: 1,
  2: 2,
  3: function r() { },
  length: 4
};
console.log(Array.from(gh));


obj = {
  0: "Hello",
  1: "world!",
  length: 2
};
obj.join = Array.prototype.join;

// alert( obj.join(','));

console.log(String.prototype);

'ert'.show();
let e = 'ert'.anchor('rt');
console.log(e);

console.log(Number.prototype);
// let y3 = 4.5.toFixed(2);
let y4 = 4.5.toExponential(5);
console.log(y4);


Function.prototype.defer = function (ms) {
  let f = this;

  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b, c) {
  console.log(a + b + c);
}

f.defer(2000)(2, 4, 5);

