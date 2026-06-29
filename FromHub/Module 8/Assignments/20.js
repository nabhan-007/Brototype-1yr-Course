/*
Write a class method using optional chaining to check if an optional property exists.

E.g.: Input → this.address?.city
Output → "Chennai" or undefined
*/

class Person {
  constructor(address) {
    this.address = address;
  }

  getCity() {
    return this.address?.city;
  }
}

let person = new Person({
  city: "Chennai",
});

let output = person.getCity();

console.log(output);
