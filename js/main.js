// Получаем ссылки на HTML-элементы
const resultElement = document.getElementById("result");
const numberElement = document.getElementById("number");
const operationElement = document.getElementById("operation");

let currentNumber = "0";
let firstNumber = null;
let operation = null;

function updateDisplay() {
  resultElement.textContent = currentNumber;
  numberElement.textContent = firstNumber !== null ? firstNumber : "";
  operationElement.textContent = operation !== null ? operation : "";
}

function handleNumberClick(value) {
  if (currentNumber === "0" || operation === "=") {
    currentNumber = value;
  } else {
    currentNumber += value;
  }
  updateDisplay();
}

function handleOperationClick(op) {
  if (firstNumber === null) {
    firstNumber = currentNumber;
    operation = op;
    currentNumber = "0";
  } else {
    calculateResult();
    operation = op;
  }
  updateDisplay();
}

function calculateResult() {
  switch (operation) {
    case "+":
      currentNumber = (
        parseFloat(firstNumber) + parseFloat(currentNumber)
      ).toString();
      break;
    case "-":
      currentNumber = (
        parseFloat(firstNumber) - parseFloat(currentNumber)
      ).toString();
      break;
    case "*":
      currentNumber = (
        parseFloat(firstNumber) * parseFloat(currentNumber)
      ).toString();
      break;
    case "/":
      currentNumber = (
        parseFloat(firstNumber) / parseFloat(currentNumber)
      ).toString();
      break;
    case "%":
      currentNumber = (
        parseFloat(firstNumber) % parseFloat(currentNumber)
      ).toString();
      break;
    default:
      return;
  }
  firstNumber = null;
  operation = "=";
}

function handleClearEntryClick() {
  currentNumber = "0";
  updateDisplay();
}

function handleClearClick() {
  currentNumber = "0";
  firstNumber = null;
  operation = null;
  updateDisplay();
}

document
  .getElementById("one-button")
  .addEventListener("click", () => handleNumberClick("1"));
document
  .getElementById("two-button")
  .addEventListener("click", () => handleNumberClick("2"));
document
  .getElementById("three-button")
  .addEventListener("click", () => handleNumberClick("3"));
document
  .getElementById("four-button")
  .addEventListener("click", () => handleNumberClick("4"));
document
  .getElementById("five-button")
  .addEventListener("click", () => handleNumberClick("5"));
document
  .getElementById("six-button")
  .addEventListener("click", () => handleNumberClick("6"));
document
  .getElementById("seven-button")
  .addEventListener("click", () => handleNumberClick("7"));
document
  .getElementById("eight-button")
  .addEventListener("click", () => handleNumberClick("8"));
document
  .getElementById("nine-button")
  .addEventListener("click", () => handleNumberClick("9"));
document
  .getElementById("zero-button")
  .addEventListener("click", () => handleNumberClick("0"));
document.getElementById("dot-button").addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }
  updateDisplay();
});

document
  .getElementById("plus-button")
  .addEventListener("click", () => handleOperationClick("+"));
document
  .getElementById("minus-button")
  .addEventListener("click", () => handleOperationClick("-"));
document
  .getElementById("multiply-button")
  .addEventListener("click", () => handleOperationClick("*"));
document
  .getElementById("divide-button")
  .addEventListener("click", () => handleOperationClick("/"));
document
  .getElementById("percent-button")
  .addEventListener("click", () => handleOperationClick("%"));

document.getElementById("equal-button").addEventListener("click", () => {
  if (firstNumber !== null) {
    calculateResult();
    updateDisplay();
  }
});

document
  .getElementById("remove-all-button")
  .addEventListener("click", handleClearEntryClick);
document
  .getElementById("remove-last-char-button")
  .addEventListener("click", handleClearClick);

updateDisplay();
