/*
Implement polymorphism using method overriding in a class hierarchy.

E.g.: Animal → speak(), Dog → speak()
Output → Dog says woof!
*/

class Animal {
  speak() {
    return "Animal makes a sound!";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog says woof!";
  }
}

let dog = new Dog();

let output = dog.speak();

console.log(output);
