function hwhw() {
  console.log(Date());
}
let btn = document.querySelector("input[type='button'][value='Click Me']");
btn.onclick = hwhw;

const rand = Math.random();
console.log(Math.floor(rand * 10));

console.log("Hello World");

let brand = "NAABO";
console.log(`Hi, ${brand}`);

console.log(brand[3]);
console.log(brand.charAt(3));

console.log(brand.toLowerCase());
console.log(brand.toUpperCase());
