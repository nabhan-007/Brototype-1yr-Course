// ----------------------------
// Prototypes
// ----------------------------
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// ----------------------------
// Classes (ES6+)
// ----------------------------
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(this.brand + " is driving");
  }
}

const myCar = new Car("Tesla");
myCar.drive(); // Tesla is driving

// ----------------------------
// Encapsulation
// ----------------------------
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100

// ----------------------------
// Polymorphism & Inheritance
// ----------------------------
class Animal {
  speak() {
    console.log("Generic sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
new Dog().speak(); // Woof!
