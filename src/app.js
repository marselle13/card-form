"use strict";

const inputs = document.querySelectorAll("input");
const cardHolder = document.querySelector(".cardholder_name");
const inputCardHolder = document.getElementById("cardholder_name");
const cardNumber = document.querySelector(".card_number");
const inputCardNumber = document.getElementById("card_number");

class App {
  constructor() {
    inputs.forEach((input) => {
      input.addEventListener("keyup", this._keyPress);
    });
    inputCardNumber.addEventListener("input", this._inputCard);
  }

  _inputCard() {
    inputCardNumber.value = inputCardNumber.value.replace(/[^0-9]/g, "");
    if (inputCardNumber.value.length > 0) {
      inputCardNumber.value = inputCardNumber.value.match(/.{1,4}/g).join(" ");
    }
  }

  _keyPress(e) {
    const checkValue = (startingText, text, input) => {
      if (input.value) {
        text.textContent = input.value;
      } else {
        text.textContent = `${startingText}`;
      }
    };

    const textName = cardHolder.getAttribute("class").split(" ")[0];
    const textNumber = cardNumber.getAttribute("class").split(" ")[0];

    if (e.target.id === textName || textNumber) {
      checkValue("JANE APPLESEED", cardHolder, inputCardHolder);
      checkValue("0000 0000 0000 0000", cardNumber, inputCardNumber);
    }
  }
}

const app = new App();
