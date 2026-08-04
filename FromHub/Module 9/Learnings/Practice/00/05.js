function* generatorExample() {
  console.log("Start");
  yield "Paused at step 1";

  console.log("Resumed");
  yield "Paused at step 2";

  console.log("Finished");
}

const gen = generatorExample();

console.log(gen.next()); // { value: "Paused at step 1", done: false }
console.log(gen.next()); // { value: "Paused at step 2", done: false }
console.log(gen.next()); // { value: undefined, done: true }
