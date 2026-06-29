const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// // First name of all the people who are below age 30
// const result = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(result);
// // Second approach
// const output = users.reduce((acc, x) => {
//   if (x.age < 30) {
//     acc.push(x.firstName);
//   }
//   return acc;
// }, []);
// console.log(output);

// // Extract names
// let allFirstNames = users.map((x) => `${x.firstName} ${x.lastName}`);
// console.log(allFirstNames);

// // Get age frequencies
// let ageFreq = users.reduce((acc, x) => {
//   if (!acc[x.age]) {
//     acc[x.age] = 1;
//   } else {
//     acc[x.age] += 1;
//   }
//   return acc;
// }, {});

// console.log(ageFreq);
