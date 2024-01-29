// hoisting in javascript behavioural n which  function or a varible an be used before decleartion.
// var is hoisted
// let and const is not hoisted
// example

a = 5;
console.log(a);
var a;

hoisted();
function hoisted() {``
  console.log("Hi");
}
// let and const cannot be hoised.

// a1 = 5;
// console.log(a1);
// let a1;

