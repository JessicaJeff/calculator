export default function calculateResult(array) {
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

  return result;
}