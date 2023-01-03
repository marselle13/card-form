"use strict";

const inputs = document.querySelectorAll("input");
//text content
const cardHolder = document.querySelector(".cardholder_name");
const cardNumber = document.querySelector(".card_number");
const cardCVC = document.querySelector(".cvc");
const cardDate = document.querySelector(".date");

//inputs
const inputCardHolder = document.getElementById("cardholder_name");
const inputCardNumber = document.getElementById("card_number");
const inputCVC = document.getElementById("cvc");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

class App {
  constructor() {
    //keyup event
    inputs.forEach((input) => {
      input.addEventListener("keyup", this._keyPress);
    });
    //input card Number checker
    inputCardNumber.addEventListener("input", this._inputCard);
    inputCVC.addEventListener("input", this._inputCVC);
    inputMonth.addEventListener("input", this._inputDate);
    inputYear.addEventListener("input", this._inputDate);
  }
  //input card checker method
  _inputCard() {
    inputCardNumber.value = inputCardNumber.value.replace(/[^0-9]/g, "");
    if (inputCardNumber.value.length > 0) {
      inputCardNumber.value = inputCardNumber.value.match(/.{1,4}/g).join(" ");
    }
  }
  _inputCVC() {
    inputCVC.value = inputCVC.value.replace(/^(\d{3}).*$/, "$1");
  }
  _inputDate() {
    inputMonth.value = inputMonth.value.replace(/^(\d{2}).*$/, "$1");
    inputYear.value = inputYear.value.replace(/^(\d{2}).*$/, "$1");
  }

  _keyPress(e) {
    const checkValue = (startingText, text, input) => {
      if (input.value) {
        text.textContent = input.value;
      } else {
        text.textContent = `${startingText}`;
      }
    };

    const checkDate = () => {
      if (inputMonth.value || inputYear.value) {
        cardDate.textContent = `${inputMonth.value}/${inputYear.value}`;
      } else {
        cardDate.textContent = `00/00`;
      }
    };

    checkValue("JANE APPLESEED", cardHolder, inputCardHolder);
    checkValue("0000 0000 0000 0000", cardNumber, inputCardNumber);
    checkValue("000", cardCVC, inputCVC);
    checkDate();
  }
}

const app = new App();
