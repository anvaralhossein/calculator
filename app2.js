const numberButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const reverseButton = document.querySelector("[data-reverse]");
const pointButton = document.querySelector("[data-point]");
const previousOperandTextElement = document.getElementById("bobo");
const currentOperandTextElement = document.getElementById("booo");
const total = document.getElementById("total");
const minus = document.getElementById("minus");
const precent = document.getElementById("precent");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");

let number1;
let number2;
let setPoint = false;
let optatar = "";
let result;

for (let i = 0; i < numberButtons.length; i++)
  numberButtons[i].addEventListener("click", () => {
    if (currentOperandTextElement.textContent == "0") {
      currentOperandTextElement.textContent = numberButtons[i].textContent;
    } else {
      currentOperandTextElement.textContent += numberButtons[i].textContent;
    }
  });

allClearButton.addEventListener("click", () => {
  currentOperandTextElement.textContent = "";
  previousOperandTextElement.textContent = " ";
  setPoint = false;
});

pointButton.addEventListener("click", () => {
  if (setPoint == false) {
    currentOperandTextElement.textContent += ".";
    setPoint = true;
  }
});

reverseButton.addEventListener("click", () => {
  currentOperandTextElement.textContent =
    currentOperandTextElement.textContent * -1;
});

precent.addEventListener("click", () => {
  currentOperandTextElement.textContent =
    currentOperandTextElement.textContent / 100;
});

total.addEventListener("click", () => {
  number1 = Number(currentOperandTextElement.textContent);
  previousOperandTextElement.textContent += number1;
  currentOperandTextElement.textContent = "0";
  previousOperandTextElement.textContent += "+";

  optatar = "+";
});

minus.addEventListener("click", () => {
  number1 = Number(currentOperandTextElement.textContent);
  previousOperandTextElement.textContent += number1;
  currentOperandTextElement.textContent = "0";
  previousOperandTextElement.textContent += "-";

  optatar = "-";
});

division.addEventListener("click", () => {
  number1 = Number(currentOperandTextElement.textContent);
  previousOperandTextElement.textContent += number1;
  currentOperandTextElement.textContent = "0";
  previousOperandTextElement.textContent += "÷";

  optatar = "/";
});

multiplication.addEventListener("click", () => {
  number1 = Number(currentOperandTextElement.textContent);
  previousOperandTextElement.textContent += number1;
  currentOperandTextElement.textContent = "0";
  previousOperandTextElement.textContent += "×";

  optatar = "*";
});

equalsButton.addEventListener("click", () => {
  number2 = Number(currentOperandTextElement.textContent);
  switch (optatar) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  currentOperandTextElement.textContent = result;
  previousOperandTextElement.textContent = " ";
});
