import Calculator from './Calculator.js'

const calc = new Calculator();

const HOUR = document.querySelector('.hour');
const MINUTE = document.querySelector('.minute');


const AC = document.querySelector('.ac');
const PM = document.querySelector('.pm');
const PERCENT = document.querySelector('.percent');

const ADDITION = document.querySelector('.addition');
const SUBTRACTION = document.querySelector('.subtraction');
const MULTIPLICATION = document.querySelector('.multiplication');
const DIVISION = document.querySelector('.division');
const EQUAL = document.querySelector('.equal');

const DECIMAL = document.querySelector('.decimal');
const NUMBERS = document.querySelectorAll('div[class*="number"]');

const CALC_KEYBOARD = {
    'Escape': AC, 'p': PM, '%': PERCENT, '+': ADDITION, '-': SUBTRACTION, '*': MULTIPLICATION,
    '/': DIVISION, 'Enter': EQUAL, '.': DECIMAL, '0': NUMBERS[9], '1': NUMBERS[6],
    '2': NUMBERS[7], '3': NUMBERS[8], '4': NUMBERS[3], '5': NUMBERS[4], '6': NUMBERS[5],
    '7': NUMBERS[0], '8': NUMBERS[1], '9': NUMBERS[2]
};

const INSTRUCTIONS = document.querySelector('.instructions');

// Function's Event Listeners
AC.addEventListener('click', () => {
    calc.display.reset();
    calc.memoryReset();
}, false);

PM.addEventListener('click', () => {
    calc.pm();
}, false);

PERCENT.addEventListener('click', () => {
    calc.percent();
}, false);


// Operator's Event Listeners
ADDITION.addEventListener('click', () => {
    calc.operationHandler('addition');
}, false);

SUBTRACTION.addEventListener('click', () => {
    calc.operationHandler('subtraction');
}, false);

MULTIPLICATION.addEventListener('click', () => {
    calc.operationHandler('multiplication');
}, false);

DIVISION.addEventListener('click', () => {
    calc.operationHandler('division');
}, false);

EQUAL.addEventListener('click', () => {
    calc.equal();
}, false);


// Add Event Listeners to numbers and decimal
NUMBERS.forEach(number => {
    number.addEventListener('click', () => {
        calc.display.addValue(number.textContent);
    }, false);
});

DECIMAL.addEventListener('click', () => {
    calc.display.addDecimal();
}, false);


// Add keydown Event Listeners to the calculator.
document.addEventListener('keydown', event => {
    event.preventDefault();

    let key = event.key;
    if (CALC_KEYBOARD[key]) {
        CALC_KEYBOARD[key].classList.toggle('active');
        CALC_KEYBOARD[key].click();
        //CALC_KEYBOARD[key].dispatchEvent(new Event('click'));
    }
}, false);


// Set up and display time
const digitalClock = () => {
    let currentTime    = new Date();
    HOUR.textContent   = currentTime.getHours().toString();
    MINUTE.textContent = currentTime.getMinutes().toString().padStart(2, '0');
}
digitalClock();
setInterval(digitalClock, 1000);

// Hide instructions
const hideInstructions = () => {
    for (let child of INSTRUCTIONS.children) {
        child.style.display = 'none';
    }
}
setTimeout(hideInstructions, 17000);