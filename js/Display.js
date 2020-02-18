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

    // Format output 123,456,789.12
    formatOutput(currentValue) {
        const [integer, decimal] = currentValue.split('.');
        if (decimal) {
            return parseFloat(currentValue).toLocaleString('en-US', {maximumFractionDigits: decimal.length});
        } else {
            return parseFloat(currentValue).toLocaleString('en-US');
        }
    }

    // Resize front in display in order to show more numbers.
    resizeOutput() {
        let outputLength = this.value.length;

        if (outputLength < 6) {
            this._value.style.fontSize = '130px';
        } else if (outputLength === 6) {
            this._value.style.fontSize = '120px';
        } else if (outputLength === 7) {
            this._value.style.fontSize = '110px';
        } else if (outputLength >= 9) {
            this._value.style.fontSize = '90px';
        }
    }
}