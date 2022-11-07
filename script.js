"use strict";

const userName = document.querySelector(".user-name");
const errorName = document.querySelector(".error-name");
const holderName = document.querySelector(".holder-name");

const code = document.querySelector(".code");
const errorCode = document.querySelector(".error-code");
const holderCode = document.querySelector(".holder-code");

const holderYear = document.querySelector(".year");
const holderMonth = document.querySelector(".month");
const yearDate = document.querySelector(".year-date");
const monthDate = document.querySelector(".month-date");
const errorDate = document.querySelector(".error-date");

const userCvc = document.querySelector(".cvc");
const codeCvc = document.querySelector(".cvc-code");
const cvcInput = document.querySelector(".cvc-input");

const btnConfirm = document.getElementById("btn-submit");
const btnContinue = document.getElementById("btn-continue");

const form = document.querySelector(".form");
const success = document.querySelector(".success");

holderName.addEventListener("keyup", () => {
  if (Number(holderName.value)) {
    errorName.classList.add("format-word");
    holderName.classList.add("fault");
  } else {
    userName.innerHTML = holderName.value;
    errorName.classList.remove("format-word");
    errorName.classList.remove("error-msg");
    holderName.classList.remove("fault");
  }
});

holderCode.addEventListener("input", () => {
  if (!Number(holderCode.value)) {
    errorCode.classList.add("format-number");
    holderCode.classList.add("fault");
  } else {
    code.innerHTML = holderCode.value;
    holderCode.classList.remove("fault");
    errorCode.classList.remove("format-number");
    errorCode.classList.remove("error-msg");
  }
});

holderMonth.addEventListener("input", () => {
  monthDate.innerHTML = holderMonth.value;
  if (Number(holderMonth.value) && holderMonth.value > 0) {
    holderMonth.style.color = "hsl(278, 68%, 11%)";
    holderMonth.classList.remove("fault");
  } else {
    holderMonth.classList.add("fault");
    holderMonth.style.color = "red";
  }
  if (Number(holderYear.value) && Number(holderMonth.value)) {
    errorDate.classList.remove("error-msg");
  }
});

holderYear.addEventListener("input", () => {
  yearDate.innerHTML = holderYear.value;
  if (Number(holderYear.value) && holderYear.value > 0) {
    holderYear.style.color = "hsl(278, 68%, 11%)";
    holderYear.classList.remove("fault");
  } else {
    holderYear.classList.add("fault");
    holderYear.style.color = "red";
  }
  if (Number(holderYear.value) && Number(holderMonth.value)) {
    errorDate.classList.remove("error-msg");
  }
});

userCvc.addEventListener("input", () => {
  codeCvc.innerHTML = userCvc.value;
  if (Number(userCvc.value) && userCvc.value > 0) {
    cvcInput.classList.remove("error-msg");
    userCvc.classList.remove("fault");
    userCvc.style.color = "hsl(278, 68%, 11%)";
  } else {
    userCvc.style.color = "red";
  }
});

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  if (holderName.value == "") {
    errorName.classList.add("error-msg");
    holderName.classList.add("fault");
  }
  if (holderName.value == 0) {
    errorName.classList.add("format-word");
    holderName.classList.add("fault");
  }
  if (holderCode.value == "") {
    holderCode.classList.add("fault");
    errorCode.classList.add("error-msg");
  }
  if (holderMonth.value == "") {
    errorDate.classList.add("error-msg");
    holderMonth.classList.add("fault");
  }
  if (holderYear.value == "") {
    errorDate.classList.add("error-msg");
    holderYear.classList.add("fault");
  }
  if (userCvc.value == "") {
    cvcInput.classList.add("error-msg");
    userCvc.classList.add("fault");
  }

  if (
    Number(holderCode.value) &&
    !Number(holderName.value) &&
    holderMonth.value > 0 &&
    holderYear.value > 0 &&
    userCvc.value > 0
  ) {
    success.classList.add("active");
    form.classList.add("unactive");
  }
});

btnContinue.addEventListener("click", () => {
  successForm();
});

function successForm() {
  borderRemove();
  noValue();
  orginValue();
  success.classList.remove("active");
  form.classList.remove("unactive");
}

function borderRemove() {
  holderCode.classList.remove("fault");
  holderName.classList.remove("fault");
  holderMonth.classList.remove("fault");
  holderYear.classList.remove("fault");
  holderYear.classList.remove("fault");
  userCvc.classList.remove("fault");
}

function noValue() {
  holderName.value = "";
  holderCode.value = "";
  holderMonth.value = "";
  holderYear.value = "";
  userCvc.value = "";
}

function orginValue() {
  monthDate.innerHTML = "00";
  yearDate.innerHTML = "00";
  code.innerHTML = "0000 0000 0000 0000";
  userName.innerHTML = "Jane Appleseed";
  codeCvc.innerHTML = "000";
}
