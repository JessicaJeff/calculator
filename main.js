import calculateResult from "./calculateResult.js";

// Initialise an array
let screenHistory = [];


// find number buttons 
const allButtons = document.getElementsByClassName("number")
// find calculatorscreen
const screen = document.getElementById("calculator-screen")
// find operator buttons
const operators = document.getElementsByClassName("operator")


// numbers
for (let index = 0; index < allButtons.length; index++) {
  const currentButton = allButtons[index]
  
  currentButton.addEventListener("click", () => {
    // screen.innerText = screen.innerText.concat(currentButton.value)
    screen.innerText += currentButton.value
    screenHistory.push(currentButton.value)
  })
}

// operators 
for (let number = 0; number < operators.length; number++) {
  const currentOperator = operators[number] 
  
// when operator is clicked, check if its =
  currentOperator.addEventListener("click", () => {
    if (currentOperator.value === "="){
      const result = calculateResult(screenHistory);
      screen.innerText = ` = ${result}` // interpolated string
    }

    screen.innerText += currentOperator.value
    screenHistory.push(currentOperator.value)
  })
}






