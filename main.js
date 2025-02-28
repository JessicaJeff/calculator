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

function calculateResult(array) {
  // ["1", "+", "1"]
  const operatorRegex = /[\+\-\*\/]/g
  // "1+1"
  const operationString = array.join("");

  const operator = operationString.match(operatorRegex); // ["+"]
  const newArray = operationString.split(operatorRegex); // ["1", "1"]
  
  let result = 0;
  for(let i = 1; i < newArray.length; i++) {
    const currentString = newArray[i];

    switch(operator[0]) {
      case '+':
        result = parseInt(newArray[i-1]) + parseInt(currentString);
        break;

      case '-':
        result = parseInt(newArray[i-1]) - parseInt(currentString);
        break;

      case '*':
        result = parseInt(newArray[i-1]) * parseInt(currentString);
        break;

      case '/':
        result = parseInt(newArray[i-1]) / parseInt(currentString);
        break; 

      default:
        return;
    }
  }

  screen.innerText += ` = ${result}`; // interpolated string
}

// operators 
for (let number = 0; number < operators.length; number++) {
  const currentOperator = operators[number] 
  
// when operator is clicked, check if its =
  currentOperator.addEventListener("click", () => {
    if (currentOperator.value === "="){
      return calculateResult(screenHistory);  
    }

    screen.innerText += currentOperator.value
    screenHistory.push(currentOperator.value)
  })
}






