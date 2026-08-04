const fs = require("fs");
const path = require("path"); // for handling file paths better. !!Best practice.

// Synchronous
// In case of synchronous it does not have a callback function instead it returns
const files = fs.readdirSync("./");
console.log(files);

// Asynchronous (Recommended)
fs.readdir("./", function (err, files) {
  if (err) console.log(err);
  else console.log(files);
});

// File Write
const data_to_write = "# README.md\n\n- Node wrote to this file.";
fs.writeFile(path.join(__dirname, "README.md"), data_to_write, (err) => {
  if (err) throw err;
});

// File Append
const data_to_append = "\n- Node appended to this file.";
fs.appendFile(path.join(__dirname, "README.md"), data_to_append, (err) => {
  if (err) throw err;
});

// File Read
// Since asynchronous, you might or might not see any output
fs.readFile(path.join(__dirname, "README.md"), "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
