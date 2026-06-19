function createBankAccount(initialBalance = 0) {
  let balance = Number(initialBalance);

  function validateAmount(amount) {
    if (typeof amount !== "number" || !isFinite(amount)) {
      throw new TypeError("Amount must be a finite number");
    }
    if (amount <= 0) throw new RangeError("Amount must be positive");
  }

  return {
    deposit(amount) {
      validateAmount(amount);
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      validateAmount(amount);
      if (amount > balance) {
        throw new Error("Insufficient funds");
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

// Usage
const acct = createBankAccount(100);
console.log(acct.getBalance()); // 100
console.log(acct.deposit(50)); // 150
console.log(acct.withdraw(30)); // 120
// acct.balance === undefined  (balance is private)
