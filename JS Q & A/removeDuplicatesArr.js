const array = [1, 2, 3, 4, 5, 2, 1, 3];

function removeDuplicates(array) {
  // here set is using to remove the duplicates in an aray //
  // ... spread syntax is used to include all the elements in array //
  let uniquesArray = [...new Set(array)];
  console.log(uniquesArray);
}
removeDuplicates(array);


// using forEach and filter remove duplicates in an array //
function removeDup(array) {
  let result = array.filter((item, index) => array.indexOf(item) === index);
  return result;
}

const uniqueArray = removeDup(array);
console.log(uniqueArray);
