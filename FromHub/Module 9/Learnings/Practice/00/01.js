console.log("Hello Brototype. Node is alive, and my sanity is slowly fading.");

// Let's prove Node is talking directly to your operating system hardware
const os = require("os");
console.log(
  `System Check: You are running this on a ${os.type()} machine with ${os.cpus().length} CPU cores.`,
);
