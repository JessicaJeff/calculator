//button function
const button = document.getElementById("1") 
//
const screen = document.getElementById("calculator-screen")
//
button.addEventListener("click", () => {
  screen.innerText = button.value
})