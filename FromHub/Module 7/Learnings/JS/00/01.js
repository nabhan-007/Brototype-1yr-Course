let output = document.getElementById("output");

document.getElementById("login").addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Clear previous output
  output.innerHTML = "";

  // Create <p> for email
  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  output.appendChild(emailPara);

  // Create <p> for password
  let passwordPara = document.createElement("p");
  passwordPara.textContent = password;
  output.appendChild(passwordPara);
});
