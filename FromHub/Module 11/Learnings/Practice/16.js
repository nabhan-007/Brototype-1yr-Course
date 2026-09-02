// 100 - 0 : even number : one second delay

let num = 100;

// const id = setInterval(() => {
//   console.log(num);
//   if (num === 0) {
//     clearInterval(id);
//   }
//   num -= 2;
// }, 1000);

function run() {
  console.log(num);

  if (num === 0) {
    return;
  }

  num -= 2;

  setTimeout(run, 1000);
}

run();
