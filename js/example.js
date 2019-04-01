const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();

//   <input type="text" class="calculator-screen" value="" disabled />

  const keys = document.querySelector('.key-box');
  keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    // console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    // console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    // console.log('clear', target.value);
    return;
  }
// splice code start
if (target.classList.contains('backspace')) {
    inputBackspace();
    updateDisplay();
    // console.log('backspace', target.value);
    console.log("this backspace is working");
  }

// -->
// //   else if (this.id == "backspace") {
// //     let output = reverseNumberFormat(getOutput()).toString();
// //     if (output){
// //         output = output.substr(0, output.length - 1); // backspace
// //         printOutput(output); 
// //     }
// // splice code break
    inputDigit(target.value);
    updateDisplay();
    // console.log('digit', target.value);
});

//splice code cont
function inputBackspace() {
    let displayLength = calculator.displayValue.length;
    calculator.displayValue = calculator.displayValue.slice(0, displayLength - 1);
//  --displayLength;
    
    // calculator.displayValue.length - 1;
    // console.log("backspace");
    console.log("calculator.displayValue.length");
}
// btnBackspace.onclick = () => {
//     let lengthOfDisplayValue = displayValue.length; 
//     displayValue = displayValue.slice(0, lengthOfDisplayValue - 1); // We weant to only get rid of the last character each time

//     if (displayValue === '') {
//         displayValue = '0'; // Always want it to be 0
//     }
//     displayValArea.innerText = displayValue;
// }

  
//splice code stop

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }

  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;
  
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };

  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }
  console.log(calculator);