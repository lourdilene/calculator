const defaultResult = 0;
let currentResult = defaultResult;

/**Everything that comes from the HTML input is string */
function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

/**addBtn.addEventListener("click", add); The "add" function is called
 * without the "()" as it indicates that the function will only be called
 * if there is a mouse click */
addBtn.addEventListener("click", add);
