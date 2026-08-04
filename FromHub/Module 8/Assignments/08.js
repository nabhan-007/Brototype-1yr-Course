/*
Create two files: one exports a function, the other imports it using ES6 Modules. 

E.g.: Export add() from one file and import in another. 
Output → Correct execution of add(2, 3) → 5 
*/
import { add } from "./src/add.js";

let output = add(2, 3);

console.log(output);
