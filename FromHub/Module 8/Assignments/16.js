/*
Write a program that filters an array of users using filter() and destructuring.

E.g.: Input → users with age > 18
Output → Filtered list of adults
*/

let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "John", age: 25 },
];

let output = users.filter(({ age }) => age > 18);

console.log(output);
