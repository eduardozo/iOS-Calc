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