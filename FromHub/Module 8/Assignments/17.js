/*
Write a program that uses async/await with try...catch for error handling.

E.g.: Input → Bad URL
Output → Logs error properly
*/

async function getData() {
  try {
    let response = await fetch("https://invalid-url");

    let output = await response.json();

    console.log(output);
  } catch (error) {
    console.log(error);
  }
}

getData();
