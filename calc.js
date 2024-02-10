$(document).ready(function () {
  let result = 0;
  let prevEntry = 0;
  let operation = null;
  let currentEntry = "0";
  updateScreen(result);

  $(".button").on("click", function (event) {
    var pressedButton = $(this).html();
    console.log(pressedButton);

    if (pressedButton === "C") {
      result = 0;
      currentEntry = 0;
    } else if (pressedButton == "CE") {
      currentEntry = "0";
    } else if (pressedButton === "back") {
      currentEntry = currentEntry.substring(0, currentEntry.length - 1);
    } else if (pressedButton === "+/-") {
      currentEntry = currentEntry * -1;
    } else if (pressedButton === ".") {
      currentEntry += ".";
    } else if (isNumber(pressedButton)) {
      if (currentEntry === "0") currentEntry = pressedButton;
      else {
        currentEntry += pressedButton;
      }
    } else if (isOpreator(pressedButton)) {
      prevEntry = parseFloat(currentEntry);
      operation = pressedButton;
      currentEntry = "";
    } else if (pressedButton === "%") {
      currentEntry = currentEntry / 100;
    } else if (pressedButton === "sqrt") {
      currentEntry = Math.sqrt(currentEntry);
    } else if (pressedButton === "1/x") {
      currentEntry = 1 / currentEntry;
    } else if (pressedButton === "pi") {
      currentEntry = Math.PI;
    } else if (pressedButton === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
    }
    updateScreen(currentEntry);
  });
});

updateScreen = function (displayValue) {
  displayValue = displayValue.toString();
  $(".screen").html(displayValue.substring(0, 10));
};
isNumber = function (value) {
  return !isNaN(value);
};
isOpreator = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-";
};
operate = function (a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
};
