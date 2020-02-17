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
}