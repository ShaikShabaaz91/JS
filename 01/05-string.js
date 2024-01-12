const name = "nawaz";
const age = 20;

console.log(`Hi My name is ${name} i am ${age} years old`);

const gameName = new String("shabazz shaik");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));

// in sub string cannot axis negative values //
const stringName = gameName.substring(0, 3);
// console.log(stringName);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newString1 = "     shabazz    ";
console.log(newString1);
console.log(newString1.trim());

const url = "shaikshabazz@pmail.com";

console.log(url.replace("p", "g"));

console.log(url.includes("shaikshabazz"));
console.log(gameName.split(' '));
