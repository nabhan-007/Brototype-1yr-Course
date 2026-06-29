/*
Write a program that fetches data using async/await and logs the result.

E.g.: Use fetch('https://jsonplaceholder.typicode.com/todos/1')
Output → Fetched todo item
*/

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let output = await response.json();

  console.log(output);
}

getData();
