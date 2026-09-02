// middleware to block user from 1-2 PM

const express = require("express");
const app = express();

app.use((req, res, next) => {
  let now = new Date();
  const hours = now.getHours();
  req.hours = hours;

  if (hours >= 13 && hours <= 14) {
    res.send("Irangi podaa...");
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.send(req.hours);
});

app.listen(3000, () => console.log("Server running..."));
