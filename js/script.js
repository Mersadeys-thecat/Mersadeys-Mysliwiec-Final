// This script adds a greeting to the page. When the user types their name into the input field and clicks the "Greet" button, a personalized greeting message will be displayed below the button. If the input field is empty, it prompts the user to enter their name first.

const button = document.querySelector("#greet-button");
const nameInput = document.querySelector("#name-input");
const greeting = document.querySelector("#greeting");

button.addEventListener("click", function () {
  const name = nameInput.value.trim();
  if (name === "") {
    greeting.textContent = "Please type your name first.";
  } else {
    greeting.textContent = "Hello, " + name + "! Welcome to my portfolio!";
  }
});

const catButton = document.querySelector("#cat-button");
const catFact = document.querySelector("#cat-fact");

const facts = [
  "Cats sleep for about 12 to 16 hours a day.",
  "A group of cats is called a clowder.",
  "Cats can rotate their ears about 180 degrees."
];

catButton.addEventListener("click", function () {
  const index = Math.floor(Math.random() * facts.length);
  catFact.textContent = facts[index];
});

const catCorner = document.querySelector("#cat-image");
const newCatButton = document.querySelector("#new-cat-button");

const catPhotos = [
  "Images/IMG_2078.jpeg",
  "Images/IMG_1804 - Copy.jpeg",
  "Images/IMG_2151.jpeg",

]; newCatButton.addEventListener("click", function () {
  const index = Math.floor(Math.random() * catPhotos.length);
  catCorner.src = catPhotos[index];

});
