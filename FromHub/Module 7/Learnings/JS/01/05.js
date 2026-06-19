function alePrint() {
  console.log("Hello World");
  // alert("Hello World");
}

// Helper to generate random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let btn = document.createElement("input");
btn.type = "button";
btn.value = "JS Generated";
btn.style.color = getRandomColor(); // random text color
btn.style.backgroundColor = getRandomColor(); // random background

btn.onclick = function () {
  alePrint();

  // change to new random colors each click
  btn.style.color = getRandomColor();
  btn.style.backgroundColor = getRandomColor();

  // temporarily change text
  btn.value = "Clicked!";

  // after 1 second, reset text back
  setTimeout(() => {
    btn.value = "JS Generated";
  }, 777);
};

document.body.appendChild(btn);

function removeBtn() {
  btn.remove();
}

// Example: if you have another button with value="Click Me"
let remBtn = document.querySelector("input[type='button'][value='Click Me']");
if (remBtn) {
  remBtn.onclick = removeBtn;
}
