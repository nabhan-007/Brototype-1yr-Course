class Vehicle {
  static count = 0;
  constructor() {
    Vehicle.count++;
  }
  getType() {
    return "Generic";
  }
}

class Car extends Vehicle {
  getType() {
    return "Car";
  }
}

const c = new Car();
console.log(c.getType());
console.log(Vehicle.count);
