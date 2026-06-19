// class MyCard extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = "<p>Hello from custom tag!</p>";
//   }
// }
// customElements.define("my-card", MyCard);

// Grab
// const usernameInput = document.querySelector("#username");
// const submitBtn = document.querySelector("#submit-btn");

const username = document.getElementById("username");
const submitBtn = document.getElementById("submit-btn");

// document.getElementById("submit-btn").onclick = function () {
//   event.preventDefault();
//   console.log("Hello World!!");
// };

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  // console.log("Button got smashed!");
  document.getElementById("mus").innerHTML = "Button got smashed!";

  // Change button text
  submitBtn.textContent = "Processing...";

  // Add CSS class to input
  username.classList.add("error-border");
  alert("Button pressed");
});

submitBtn.addEventListener("contextmenu", function (event) {
  this.style.backgroundColor = "red";
  // alert("Close that shit!!");
});
