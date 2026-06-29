/*
This Example shows that setTimeout is not reliable and exact. It just guarantees that it will wait at-least the time specified and not the exact time.
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout!!");
}, 2000);

// Simulating 10 seconds delay (this blocks JavaScript. Not best practice!!)
let startTime = new Date().getTime();
let endTime = startTime + 5000; // 10 Seconds

while (startTime < endTime) {
  startTime = new Date().getTime();
}

console.log("End");
