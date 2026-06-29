/*
Create a subclass Student that extends Person and adds grade.

E.g.: Input → Student("Bob", 20, "A")
Output → Hello Bob, Grade: A
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

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  greet() {
    return super.greet() + ", Grade: " + this.grade;
  }
}

let student = new Student("Bob", 20, "A");

let output = student.greet();

console.log(output);
