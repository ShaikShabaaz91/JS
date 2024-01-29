//  closure provides access to the outer scope of a function from inside the inner function,
// even after the outer function has closed.

function test() {
  //variable defined outside the inner function
  let name = "Shabazz";
  //Inner function //
  function test1() {
    //access the name//
    return `Hi ${name}`;
  }
  return test1;
}
let a1 = test();
console.log(a1());

// another example multiplying //

function cal(x) {
  function mul(y) {
    return x * y;
  }
  return mul;
}

const mult1 = cal(3);
const mul2 = cal(4);

console.log(mult1(3));
console.log(mul2(2));
