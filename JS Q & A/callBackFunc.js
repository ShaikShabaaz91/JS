// this function that is passed an argument inside another function is called call back function //

function callback(name, call) {
  console.log(`Hi ${name}`);
  call();
}

function callMe() {
  console.log("i am call back function ");
}

callback("shabazz", callMe);

// another example  using setTimeOut //

function greet() {
  console.log("How Are You");
}
function a1(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 2000);
a1("shabazz");
