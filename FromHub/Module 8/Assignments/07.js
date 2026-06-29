/*
Write a function that uses object destructuring to extract nested properties.

E.g.: Input → { user: { name: "Alice", age: 22 } }
Output → name = "Alice", age = 22
*/

function extractDetails(obj) {
  let {
    user: { name, age },
  } = obj;

  console.log("name =", name);
  console.log("age =", age);
}

extractDetails({
  user: {
    name: "Alice",
    age: 22,
  },
});
