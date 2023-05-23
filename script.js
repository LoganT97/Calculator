const numberButtons = document.querySelectorAll('.b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b0')
const operatorButtons = document.querySelectorAll('.divide,.multiply,.subtract,.add')
const equalsButtons = document.querySelector('.equals')
const clearButton = document.getElementById('clear')
const backspaceButton = document.querySelector('.backspace')
const display = document.getElementById('display')

//Add event listener to clear button
clearButton.addEventListener('click', function() {
    display.innerText = '';
})

//Add event listener to backspace button
backspaceButton.addEventListener('click', function() {
    display.textContent = display.textContent.slice(0, -1)
})

//Add event listeners to number divs
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function() {
        display.textContent += numberButtons[i].textContent
    })
}

//Update display with text content of numberDiv clicked
numberButtons.forEach((numberButton) => { 
    numberButton.addEventListener('click', () => {
        display.textContent + numberButton.textContent
    })
})

//Add event listeners to operator divs
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
        display.textContent += operatorButtons[i].textContent
    })
}

//Update display with text content of operatorDiv clicked
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        display.textContent + operatorButton.textContent
    })
})

let expression = display.textContent

// Function for evaluating display.textContent when equals button is clicked
function operate(expression) {
    let operator = expression.match(/[\+\-\*\/]/g);
    let numbers = expression.split(/[\+\-\*\/]/g);
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
  
    // Check if the expression contains an operator and two numbers
    if (operator && numbers.length >= 2 && operator.length === 1) {
      // Perform the calculation based on the operator
      switch (operator[0]) {
        case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            result = a / b;
            break;
      }

    // Limit the decimal places to, for example, 2
    result = Math.round(result * 1e6) / 1e6;
    return result;
  }
  
    // If the expression is invalid, return an error message
    return 'Error: Invalid Expression';
  }

//Add event listener to equals button and display result of operate function
equalsButtons.addEventListener('click', function() {
    display.textContent = operate(display.textContent)
})





