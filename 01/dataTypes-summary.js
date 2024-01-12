//  primitive data types 7 types

// all primitive data types are call by value
// String,number,null,boolean,undefined,symbol,BigInt

// non-primitive data type are reference type

// array, objects, Functions

// is javascript static type or dynamic type language
// Answer : javascript is a dynamic type language

// ++++++++++++++++++++++++++++++++ //

// stack memory (primitive) it is a copy , Heap(non-primitive) it is a reference value //

// stack every time it's give copy value and the copy value will changes show in output originl value will not change //

let new_name = "shabazz";

let nameOne = new_name;
nameOne = "shaik";

console.log(new_name);
console.log(nameOne);

// Heap value will chnage the original value //

let obj={
    name:'shabazz',
    employee:14
}

let objOne = obj

objOne.name = "nawaz"
console.log(obj.name);
console.log(objOne.name);


