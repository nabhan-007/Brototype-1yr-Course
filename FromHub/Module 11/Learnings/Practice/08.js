// Bank Account Closure Example
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        throw new Error("Insufficient funds");
      }
      balance -= amount;
      return balance;
    },
    checkBalance() {
      return balance;
    },
  };
}

// Usage
const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50)); // 150
console.log(myAccount.withdraw(30)); // 120
console.log(myAccount.checkBalance()); // 120
