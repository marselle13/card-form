"use strict";

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const done = document.querySelector(".done");
const cont = document.querySelector(".continue");
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
//error
const error = document.querySelectorAll(".error");

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
    //submit Form
    form.addEventListener("submit", this._cardSubmit.bind(this));
    cont.addEventListener("click", this._continue);
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
      text.textContent = input.value ? input.value : `${startingText}`;
    };

    const checkDate = () => {
      cardDate.textContent =
        inputMonth.value || inputYear.value
          ? `${inputMonth.value}/${inputYear.value}`
          : `00/00`;
    };

    checkValue("JANE APPLESEED", cardHolder, inputCardHolder);
    checkValue("0000 0000 0000 0000", cardNumber, inputCardNumber);
    checkValue("000", cardCVC, inputCVC);
    checkDate();
  }
  _cardSubmit(e) {
    e.preventDefault();
    // validation
    this._validations();
    if (
      this._nameCheck() &&
      this._numberCheck() &&
      this._cvcCheck() &&
      this._yearCheck() &&
      this._monthCheck()
    ) {
      form.classList.add("hidden");
      done.classList.remove("hidden");
    }
  }
  //validation
  _validations() {
    this._blankCheck();
    this._numberCheck();
    this._monthCheck();
    this._yearCheck();
    this._cvcCheck();
  }

  _blankCheck() {
    let blank = false;
    inputs.forEach(function (input, index) {
      let errorSpan = error[index];

      if (input.value === "") {
        input.classList.add("border-red-500");
        input.classList.remove("border-gray-300");
        errorSpan.textContent = "can't be blank";
      } else {
        input.classList.remove("border-red-500");
        input.classList.add("border-gray-300");
        errorSpan.textContent = "";
      }
    });
    return blank;
  }

  _nameCheck() {
    const check = inputs[0].value ? true : false;
    return check;
  }

  _numberCheck() {
    const inputNumber = inputs[1];
    const numberValue = inputs[1].value.replace(/\s/g, "");
    const errorNumber = error[1];

    if (numberValue.length < 16 && inputs[1].value) {
      errorNumber.textContent = "wrong Number";
      inputNumber.classList.add("border-red-500");
      inputNumber.classList.remove("border-gray-300");
      return false;
    } else if (numberValue.length === 16 && inputs[1].value) {
      return true;
    }
  }

  _monthCheck() {
    const errorDate = error[2];
    const monthValue = inputs[2].value;
    const inputMonth = inputs[2];

    if (monthValue > 0 && monthValue < 13) {
      errorDate.textContent = "";
      inputMonth.classList.remove("border-red-500");
      inputMonth.classList.add("border-gray-300");
      return true;
    } else {
      errorDate.textContent = "wrong Date";
      inputMonth.classList.add("border-red-500");
      inputMonth.classList.remove("border-gray-300");
      return false;
    }
  }

  _yearCheck() {
    const errorDate = error[2];
    const date = new Date();
    const currentYear = +date.getFullYear().toString().slice(2);
    4;
    const yearValue = inputs[3].value;
    const inputYear = inputs[3];
    if (yearValue >= currentYear) {
      inputYear.classList.remove("border-red-500");
      inputYear.classList.add("border-gray-300");
      return true;
    } else {
      errorDate.textContent = "wrong Date";
      inputYear.classList.add("border-red-500");
      inputYear.classList.remove("border-gray-300");
      return false;
    }
  }
  _cvcCheck() {
    const inputCVC = inputs[4];
    const CVCValue = inputs[4].value;
    const errorCVC = error[4];
    if (CVCValue.length < 3 && CVCValue) {
      errorCVC.textContent = "wrong Format";
      inputCVC.classList.add("border-red-500");
      inputCVC.classList.remove("border-gray-300");
      return false;
    } else if (CVCValue.length === 3 && CVCValue) return true;
  }
  _continue() {
    cardHolder.textContent = "JANE APPLESEED";
    cardDate.textContent = "00/00";
    cardNumber.textContent = "0000 0000 0000 0000";
    cardCVC.textContent = "000";
    inputCVC.value = "";
    inputCardHolder.value = "";
    inputCardNumber.value = "";
    inputMonth.value = "";
    inputYear.value = "";
    form.classList.remove("hidden");
    done.classList.add("hidden");
  }
}
const app = new App();
