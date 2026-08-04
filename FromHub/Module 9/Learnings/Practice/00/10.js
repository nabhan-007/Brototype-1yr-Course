const fs = require("fs");
const path = require("path");

// const now = new Date().toString() + "\n";
const now = Date() + "\n"; // What is the need for the above then??

fs.appendFile(path.join(__dirname, "data.txt"), now, (err) => {
  if (err) throw err;

  console.log("Date Written!!");
});
