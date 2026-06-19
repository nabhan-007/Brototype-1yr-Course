console.log("Hello World");

console.log("--------------------------------------");

for (let i = 1; i <= 5; i++) {
  let row = ""; // empty string for each row
  for (let j = 0; j < i * 2 - 1; j++) {
    row += "* "; // add stars to the row
  }
  console.log(row); // print the whole row at once
}

console.log("--------------------------------------");

let arr = ["jack", "roy", 24];

// console.log(arr);
// console.log(arr.length);
console.log(...arr); // spreads elements

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr.forEach((item) => console.log(item));
for (let item of arr) {
  console.log(item);
}

console.log("--------------------------------------");

let person = {
  firstName: "Jack",
  lastName: "Roy",
  age: 24,
};

console.log(person);
console.log(
  person.firstName +
    " " +
    person.lastName +
    " is " +
    person.age +
    " year(s) old.",
);

console.log("--------------------------------------");

$(document).ready(function () {
  alert("welcome");
});
