let a = { name: "Ahad", address: { city: "Calicut" } };

let b = { ...a };

b.name = "Nabhan";
b.address.city = "Malappuram";

console.log(a); // { name: 'Ahad', address: { city: 'Malappuram' } }
console.log(b); // { name: 'Nabhan', address: { city: 'Malappuram' } }
// ==========================================================
let a = { name: "Ahad", address: { city: "Calicut" } };

let b = a;

b.name = "Nabhan";
b.address.city = "Malappuram";

console.log(a); // { name: 'Nabhan', address: { city: 'Malappuram' } }
console.log(b); // { name: 'Nabhan', address: { city: 'Malappuram' } }
