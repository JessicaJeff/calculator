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
    screenhistory.push(currentButton.value);
  })
}


// operators 
for (let number = 0; number < operators.length; number++) {
  const currentOperator = operators[number] 

  currentOperator.addEventListener("click", () => {
    screen.innerText += currentOperator.value
    screenhistory.push(currentOperator.value);
  })
}

//Save previous value in an array
let screenhistory = [];






    // clear the screen 
    // change dont add 

// 1 + 1 =
// [1, 1]

