// find number button 
const allButtons = document.getElementsByClassName("number")
// find screen
const screen = document.getElementById("calculator-screen")
// find operators button
const operators = document.getElementsByClassName("operator")

// numbers
for (let index = 0; index < allButtons.length; index++) {
  const currentButton = allButtons[index]
  
  currentButton.addEventListener("click", () => {
    // screen.innerText = screen.innerText.concat(currentButton.value)
    screen.innerText += currentButton.value
  })
}

// operators 
for (let number = 0; number < operators.length; number++) {
  const currentOperator = operators[number] 

  currentOperator.addEventListener("click", () => {
    screen.innerText += currentOperator.value
    // save the previous value in an array
    // clear the screen 
    // change dont add 
  })
}

// 1 + 1 =
// [1, 1]

