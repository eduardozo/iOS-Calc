import Display from './Display.js';

export default class Calculator {


    constructor() {
        this._display = new Display();
        this._valueInMemory = null;
        this._operatorInMemory = null;
    }

    get display() {
        return this._display;
    }

    get operatorInMemory() {
        return this._operatorInMemory;
    }

    percent() {
        this.display.value /= 100;
    }

    pm() {
        let value = this.display.value;
        if (value[0] === '-') {
            return this.display.value = value.substring(1);
        } else {
            return this.display.value = '-' + value;
        }
    }

    operationHandler(operation) {
        let currentValue = parseFloat(this.display.value.split(',').join(''));
        if (this._valueInMemory == null) {
            this._valueInMemory = currentValue;
            this._operatorInMemory = operation;
            this.display.reset()
            return;
        }

        if (operation === this.operatorInMemory) {
            switch (operation) {
                case 'addition':
                    this.addition(currentValue);
                    break;
                case 'subtraction':
                    this.subtraction(currentValue);
                    break;
                case 'multiplication':
                    this.multiplication(currentValue);
                    break;
                case 'division':
                    this.division(currentValue);
                    break;
                default:
                    this.memoryReset();
                    break;
            }
        }
    }

    addition(number) {
        let result = this._valueInMemory + number;
        this.display.value = this.parseResult(result);
        this.memoryReset();
    }

    subtraction(number) {
        let result = this._valueInMemory - number;
        this.display.value = this.parseResult(result);
        this.memoryReset();
    }

    multiplication(number) {
        let result = this._valueInMemory * number;
        this.display.value = this.parseResult(result);
        this.memoryReset();
    }

    division(number) {
        let result = this._valueInMemory / number;
        this.display.value = this.parseResult(result);
        this.memoryReset();
    }

    equal() {
        this.operationHandler(this._operatorInMemory);
    }
}