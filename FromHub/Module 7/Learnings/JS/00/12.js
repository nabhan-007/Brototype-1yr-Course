// TRAP 1: Primitives (Pass by Value)
let x = 10;
let y = x; // y gets a BRAND NEW COPY of 10 in the Stack
y = 20;
console.log(x); // Outputs: 10 (x is safe!)

// TRAP 2: Objects (Pass by Reference)
let user1 = { name: "Nabhan" };
let user2 = user1; // user2 DOES NOT copy the object. It copies the POINTER.
user2.name = "Batman";

console.log(user1.name); // Outputs: "Batman" (Wait, what?!)
