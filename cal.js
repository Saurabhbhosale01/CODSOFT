let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(firstOperand, secondOperand, currentOperator);
    }
    currentOperator = operator;
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (currentOperator && currentInput) {
        secondOperand = parseFloat(currentInput);
        currentInput = operate(firstOperand, secondOperand, currentOperator).toString();
        currentOperator = '';
        firstOperand = null;
        secondOperand = null;
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = currentInput;
}

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}
