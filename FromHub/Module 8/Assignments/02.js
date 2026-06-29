/*
Write a function that safely accesses a nested property using optional chaining. 
E.g.: Input → obj = { a: { b: { c: 10 } } } → access obj.a.b.c 
Output → 10 
*/

function safeAccess(objInput) {
  return obj?.a?.b?.c;
}

let obj = { a: { b: { c: 10 } } };

let output = safeAccess(obj);
console.log(output);
