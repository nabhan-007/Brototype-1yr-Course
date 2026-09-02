// Find the biggest word in a paragraph
const paragraph =
  "Node.js® is a free, open-source, cross-platform JavaScript runtime environment... As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.";

const para = paragraph.split(" ");

let biggestWord = para.reduce(
  (acc, word) => {
    let charNum = word.length;
    if (acc.charNum < charNum) {
      acc.charNum = charNum;
      acc.word = word;
    }
    return acc;
  },
  { charNum: 0, word: "" },
);

console.log(biggestWord.word);
