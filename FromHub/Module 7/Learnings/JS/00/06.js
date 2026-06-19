let arr = [1, 2, 3, 2, 1];
console.log(arr);

let arr = [...new Set(arr)];
console.log(arr);

// ==========================================================

// 1. Initialize the Map
let myMap = new Map();

// 2. Add data using .set(key, value)
// Notice how the keys are completely different data types!
myMap.set("location", "Calicut"); // String key
myMap.set(8080, "Port open"); // Number key
myMap.set(true, "Setup complete"); // Boolean key

// You can literally use an object as a key. Try doing this with a regular {}!
const oldLaptop = { model: "HP 15s" };
myMap.set(oldLaptop, "Ubuntu Server Host");

// 3. Read the data using .get(key)
console.log(myMap.get(8080)); // Outputs: "Port open"
console.log(myMap.get(oldLaptop)); // Outputs: "Ubuntu Server Host"

// 4. Checking size is effortless
// With objects you have to use Object.keys(obj).length. Maps just know.
console.log(myMap.size); // Outputs: 4

// 5. Check if a key exists using .has(key)
console.log(myMap.has(true)); // Outputs: true

// 6. Delete a specific item
myMap.delete("location");
