const buf = Buffer.from("Hello");

// Buffers are MUTABLE
buf[0] = 74; // 74 = ASCII for 'J'
console.log(buf.toString()); // 'Jello'

// Strings are IMMUTABLE
let str = "Hello";
str[0] = "J";
console.log(str); // 'Hello' (unchanged!)
