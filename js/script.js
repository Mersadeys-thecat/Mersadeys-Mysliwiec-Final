javascript
// Small interactive example for the portfolio.
// When the button is clicked, show a greeting using the name typed in the input.

const button = document.getElementById("greet-button");
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

button.addEventListener("click", function () {
  const name = nameInput.value.trim();
  if (name === "") {
    greeting.textContent = "Please type your name first.";
  } else {
    greeting.textContent = "Hello, " + name + "! Welcome to my portfolio.";
  }
});