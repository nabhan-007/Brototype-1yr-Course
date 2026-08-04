let obj = [
  { item: "phone", price: "250" },
  { item: "Laptop", price: "500" },
  { item: "Fridge", price: "500" },
];

// let output = obj.filter((x) => x.price >= 500).map((x) => x.item);

let output = obj.filter((x) => x.price >= 500);

// output = output.reduce((acc, x) => {
//   acc.push(x.item);
//   return acc;
// }, []);

for (i in output) {
  console.log(obj[i].item);
}

// console.log(output);
