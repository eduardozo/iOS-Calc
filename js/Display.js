export default class Display {
    constructor() {
        this._value = document.querySelector('.display');
        this.valueDisplayCopiable();
    }

    get value() {
        return this._value.textContent;
    }

    set value(input) {
        if (input.length > 11) {
            return;
        }
        this._value.textContent = input;
        this.resizeOutput();
    }

    addValue(input) {
        this.value = this.parse(input);
    }

    addDecimal() {
        let currentValue = this.value;
        const DECIMAL = '.'
        if (!currentValue.includes(DECIMAL)) {
            this.value = currentValue.concat(DECIMAL);
        } else {
            this.value = currentValue;
        }

    }

    reset() {
        this.value = 0;
    }

    parse(input) {
        let currentValue = this.value;

        // Allow only one zero at the beginning.
        if (currentValue === '0' && input === '0') {
            return input;
        }

        // Allow a decimal number has a zero at the end.
        if (currentValue.includes('.') && input === '0') {
            return currentValue.concat(input);
        }

        // Format value.
        currentValue = currentValue.split(',').join('');
        return this.formatOutput(currentValue.concat(input));
    }
}