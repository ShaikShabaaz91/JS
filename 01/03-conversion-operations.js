let score = "33";

console.log(typeof score);

let value = Number("30");

console.log("value", value);

// "33" => 33
// "33abc" => NAN
// "true" => 1

let Loginedin = 1;

let BooleanLoginedIn = Boolean(Loginedin);

console.log("boolean", BooleanLoginedIn);

// 1 => true
// 2 => fasle
// "" => fasle
// "shabazz" => true

let someNumber = 30;

let stringNumber = String(someNumber);

console.log("Number", stringNumber);
console.log(typeof stringNumber);

// ***************** Operations ***************** //

let value0 = 3;
let negValue = -value0;

console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 3);

let str1 = "shaik";
let str2 = " shabazz";

let str3 = str1 + str2;

// console.log(str3);

// console.log(1 + "1");
// console.log("1" + 1);
// console.log("1" + 1 + 2);
// console.log(1 + 2 + "2");

console.log(+true);

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// read prefix and post fix