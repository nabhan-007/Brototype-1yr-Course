// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0); // prints 3,3,3 — var is function-scoped
// }

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // prints 0,1,2 — var is function-scoped
}
