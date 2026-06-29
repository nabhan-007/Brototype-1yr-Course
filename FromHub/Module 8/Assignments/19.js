/*
Create a class that accepts rest parameters in its constructor and stores all items.

E.g.: Input → new Basket("apple", "banana")
Output → ["apple", "banana"]
*/

class Basket {
  constructor(...items) {
    this.items = items;
  }
}

let basket = new Basket("apple", "banana");

let output = basket.items;

console.log(output);
