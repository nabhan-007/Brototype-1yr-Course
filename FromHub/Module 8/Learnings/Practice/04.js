function Counter() {
  let count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

let counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
