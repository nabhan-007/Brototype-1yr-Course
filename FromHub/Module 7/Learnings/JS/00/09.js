// Clousure Example

function bankAccount() {
  let balance = 1000; // private variable

  function deposit(amount) {
    balance += amount;
    return balance;
  }

  function withdraw(amount) {
    balance -= amount;
    return balance;
  }

  function checkBalance() {
    return balance;
  }
  return {
    deposit,
    withdraw,
    checkBalance,
  };
}

let myAccount = bankAccount();
console.log(myAccount.deposit(500)); // 1500
console.log(myAccount.withdraw(200)); // 1300
console.log(myAccount.checkBalance()); // 1300
