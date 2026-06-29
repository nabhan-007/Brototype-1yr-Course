/*
Write a class using encapsulation where age can be accessed only through a getter.

E.g.: Input → person.getAge()
Output → 25
*/

class Person {
  #age;

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

let person = new Person(25);

let output = person.getAge();

console.log(output);
