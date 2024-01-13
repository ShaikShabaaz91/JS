//. Array //

// push is used to push the element in last index
const array = [1, 2, 3, 4, 5, 6];
array.push(7);
// console.log(array);

// pop is used to remove the last element
const pop_array = [1, 2, 3, 4, 5, 6];
// console.log(pop_array.pop())

const shift_array = [1, 2, 3, 4, 5, 6];
// console.log("shift",shift_array.unshift(8));
// console.log(shift_array.shift());
// console.log(shift_array.includes(5));
//******* Joins is used to it's convert string  ****** */
// console.log(shift_array.join());

// Slice //

const sliceArr = [0, 1, 2, 3, 4, 5];
console.log("slice", sliceArr);
console.log(sliceArr.slice(1, 3));

const spliceArr = [0,1,2,3,4,5,6]
console.log("splice",spliceArr);
console.log(spliceArr.splice(1,3));