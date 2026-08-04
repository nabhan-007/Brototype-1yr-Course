const timestamp = new Date().toISOString();
console.log(timestamp);

const err = new Error("Something broke on the server!");
throw err;
