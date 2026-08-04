var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    const currentCustomerWealth = accounts[i].reduce(
      (sum, bank) => sum + bank,
      0,
    );

    maxWealth = Math.max(maxWealth, currentCustomerWealth);
  }

  return maxWealth;
};

const output = maximumWealth(
  (accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
);
console.log(output);
