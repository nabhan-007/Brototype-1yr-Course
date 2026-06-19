for (let i = 1; i <= 5; i++) {
  let row = ""; // empty string for each row
  for (let j = 0; j < i * 2 - 1; j++) {
    row += "* "; // add stars to the row
  }
  console.log(row); // print the whole row at once
}
