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

    
}