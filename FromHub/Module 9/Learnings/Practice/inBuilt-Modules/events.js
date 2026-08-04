const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (data) => {
  console.log(data);
});

emitter.on("logout", (data) => {
  console.log(data.text);
});

emitter.emit("message", "User Logged In");

emitter.emit("logout", { text: "User Logged Out" });
