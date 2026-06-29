/*
Create a class called Person with name and age, and a method greet() that returns
"Hello [name]".

E.g.: Input → Person("Alice", 25)
Output → "Hello Alice"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }
}

let person = new Person("Alice", 25);

let output = person.greet();

console.log(output);
