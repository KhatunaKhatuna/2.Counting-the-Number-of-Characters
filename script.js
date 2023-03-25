"use strict";

const input = document.querySelector(".textInput--input ");
// add event listener to input
input.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  const lengthOfInputValue = inputValue.length;

  if (!inputValue) {
    document.querySelector(".card--output").textContent =
      "Please enter your name";
  } else if (!/^[a-zA-Z]*$/g.test(inputValue)) {
    //validate letters or not
    document.querySelector(".card--output").textContent =
      "Please enter only letters";
  } else {
    document.querySelector(
      ".card--output"
    ).textContent = `your name - ${inputValue} has ${lengthOfInputValue} characters.`;
  }
});
