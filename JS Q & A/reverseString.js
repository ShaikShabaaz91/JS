const string = "Shabazz";

function reverseString(string) {
  const reverse = string.split("").reverse().join("");
  console.log(reverse);
}
reverseString(string);
