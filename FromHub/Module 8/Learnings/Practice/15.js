// user.js
export let name = "Ravi";
export function changeName(newName) {
  name = newName;
}

// main.js
import { name, changeName } from "./user.js";
console.log(name);
changeName("Priya");
console.log(name);
