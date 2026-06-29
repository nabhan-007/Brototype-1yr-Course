/*
Call, Apply and Bind
*/

// ==========================================================

// const boys = {
//   name: "Akshay",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// // Normal
// boys.printName();

// const girls = {
//   name: "Shwetha",
// };

// // Using `call`
// boys.printName.call(girls);

// ==========================================================

const boys = {
  name: "Akshay",
};

const girls = {
  name: "Shwetha",
};

const printName = function (state, country) {
  console.log(`${this.name} (${state}, ${country})`);
};

printName.call(boys, "Maharashtra", "India"); // comma seperated
printName.apply(girls, ["Chandigarh", "India"]); // arguments in an array

const binded = printName.bind(boys, "Maharashtra", "India");
console.log(binded);
binded();
/* Output:

Akshay (Maharashtra, India)
Shwetha (Chandigarh, India)
[Function: bound printName]
Akshay (Maharashtra, India)
*/

// ==========================================================
