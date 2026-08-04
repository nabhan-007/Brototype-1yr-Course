class BankAccount {
  #balance = 0; // private field

  constructor(initial) {
    this.#balance = initial;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getBalance()); // 150
// console.log(acc.#balance); // SyntaxError: private field
