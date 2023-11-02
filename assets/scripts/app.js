var userNumber = "";
var buttons = document.querySelectorAll(".number");
var resultCalculator = 0;
var fullStringText = "";
var operator = "";
var textResult = "";

for (let index = 0; index < buttons.length; index++) {
  document
    .querySelectorAll(".number")
    [index].addEventListener("click", function () {
      userInput = this.innerHTML;
      textResult = concatStringToDisplay(userInput);
      outputResult(resultCalculator, textResult);
    });
}

function applyOperator(op, a, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "^":
      return Math.pow(a, b);
    default:
      throw Error(`unsupported operator: ${op}`);
  }
}

function concatStringToDisplay(stringText = "") {
  fullStringText = fullStringText + stringText;
  return fullStringText;
}

function add() {
  operator = "+";
  textResult = concatStringToDisplay("+");
  outputResult(resultCalculator, textResult);
}

function subtract() {
  operator = "-";
  textResult = concatStringToDisplay("-");
  outputResult(resultCalculator, textResult);
}

function multiply() {
  operator = "*";
  textResult = concatStringToDisplay("*");
  outputResult(resultCalculator, textResult);
}

function divide() {
  operator = "/";
  textResult = concatStringToDisplay("/");
  outputResult(resultCalculator, textResult);
}

function result() {
  let text = concatStringToDisplay();
  let operands = text.split(operator);
  resultCalculator = applyOperator(
    operator,
    parseInt(operands[0]),
    parseInt(operands[1])
  );
  outputResult(resultCalculator, text);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
resultBtn.addEventListener("click", result);
