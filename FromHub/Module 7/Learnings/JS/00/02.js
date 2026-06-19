function capitalizeFirst(str) {
  str = String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let obj = { name: "Nabhan", place: "Calicut", domain: "MERN" };

console.log(obj);

for (key in obj) {
  console.log(capitalizeFirst(key) + ": " + obj[key]);
}

for (value of obj) {
  console.log(value);
}
