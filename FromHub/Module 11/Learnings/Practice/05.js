// Find the duplicate letters in a word
const word = "propeller";

const duplicates = word.split("").reduce((acc, value) => {
  if (!Object.keys(acc).includes(value)) {
    acc[value] = 1;
  } else {
    acc[value] += 1;
  }
  return acc;
}, {});

console.log(`The duplicate letters in the word: ${word} are:`);

for (let i in duplicates) {
  if (duplicates[i] > 1) {
    console.log(i);
  }
}
