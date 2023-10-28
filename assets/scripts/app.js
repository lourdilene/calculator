var userNumber = "";
var buttons = document.querySelectorAll(".number");
var numbers = [];
var resultCalculator = 0;

var calculator = {
  operator: "",
  numbers: [],
};

for (let index = 0; index < buttons.length; index++) {
  document
    .querySelectorAll(".number")
    [index].addEventListener("click", function () {
      if (numbers.length == 0) {
        userNumber = userNumber + this.innerHTML;
        outputResult(resultCalculator, userNumber);
      }
      if (numbers.length >= 1) {
        userNumber = userNumber + this.innerHTML;
        numbers[1] = userNumber;
        outputResult(resultCalculator, `${numbers[0]} + ${numbers[1]}`);
        console.log(calculator);
      }
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

function add() {
  numbers.push(userNumber);
  outputResult(resultCalculator, `${numbers[0]} +`);
  userNumber = "";
  calculator.operator = "+";
  calculator.numbers.push(numbers[0]);
}

function result() {
  calculator.numbers.push(numbers[1]);
  console.log(calculator.operator, numbers[0], numbers[1]);
  resultCalculator = applyOperator(
    calculator.operator,
    parseInt(numbers[0]),
    parseInt(numbers[1])
  );
  console.log(resultCalculator);
  outputResult(resultCalculator, resultCalculator);
}

addBtn.addEventListener("click", add);
resultBtn.addEventListener("click", result);
